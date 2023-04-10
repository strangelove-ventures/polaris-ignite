import * as fs from "node:fs/promises";
import * as path from "node:path";
import { performance } from "node:perf_hooks";

import traverse from "@babel/traverse";
import * as t from "@babel/types";
import { globby } from "globby";
import pmap from "p-map";
import * as r from "recast";

const Codemod = {
  fn: (ctx: string, fn: () => void | Promise<void>) => async () => {
    const t0 = performance.now();
    console.log(`[ start   ] ${ctx}`);
    await fn();
    const t1 = performance.now();
    console.log(`[ success ] ${ctx} in ${t1 - t0}ms`);
    // console.log(`finished ${ctx} in ${Math.round((t1 - t0) / 100) / 10}s`);
  },
  parse: async (content: string, opts?: r.Options) => {
    const ast = r.parse(content, { parser: await import("recast/parsers/typescript"), ...opts }) as t.Node;
    t.assertFile(ast);
    return ast;
  },
  print: async (ast: t.Node, opts?: r.Options) => {
    return r.print(ast, {
      parser: await import("recast/parsers/typescript"),
      tabWidth: 2,
      useTabs: false,
      ...opts,
    });
  },
};

const cleanupClient = Codemod.fn("cleanup client", async () => {
  const filename = path.join(process.cwd(), "src/client.ts");
  const content = await fs.readFile(filename, { encoding: "utf-8" });

  const ast = await Codemod.parse(content);

  // remove first line comment for possibility of triple slash directive
  // @ts-expect-error comments field actually exists
  delete ast.program.body[0].comments;

  traverse(ast, {
    ClassMethod: (p1) => {
      // traverse to ignite client's `signAndBroadcast` method to remove redundant `await` keyword
      if (t.isIdentifier(p1.node.key, { name: "signAndBroadcast" })) {
        p1.traverse({
          ReturnStatement: (p2) => {
            if (t.isAwaitExpression(p2.node.argument)) {
              p2.node.argument = p2.node.argument.argument;
              p2.skip();
            }
          },
        });
        p1.skip();
      }
      // traverse to `useKeplr` method to delete it
      if (t.isIdentifier(p1.node.key, { name: "useKeplr" })) {
        p1.remove();
        p1.skip();
      }
    },
    ImportDeclaration: (p1) => {
      // traverse to `@keplr-wallet/types` import declaration to delete it
      if (t.isStringLiteral(p1.node.source, { value: "@keplr-wallet/types" })) {
        p1.remove();
        p1.skip();
      }
    },
  });

  const { code } = await Codemod.print(ast);
  await fs.writeFile(filename, code, { encoding: "utf-8" });
  // console.log(code);
});

const fixRestHeadersField = Codemod.fn("fixing rest headers", async () => {
  const filenames = await globby(["src/cosmos.*/**/rest.ts"], { absolute: true });
  const mapper = async (filename: string) => {
    console.log(`[ info    ] ${filename}`);
    const content = await fs.readFile(filename, { encoding: "utf-8" });
    const ast = await Codemod.parse(content);
    traverse(ast, {
      ClassMethod: (p1) => {
        if (t.isIdentifier(p1.node.key, { name: "mergeRequestParams" })) {
          p1.traverse({
            ObjectProperty: (p2) => {
              if (t.isIdentifier(p2.node.key, { name: "headers" })) {
                // force assign comments field because for some reason it does not exist on babel-types declaration
                Object.assign(p2.node, {
                  comments: [
                    {
                      type: "CommentLine",
                      value: " @ts-expect-error force merge headers",
                      leading: true,
                      trailing: false,
                    },
                  ],
                });
                // p2.addComment("leading", " @ts-expect-error force merge headers");
                p2.skip();
              }
            },
          });
          p1.skip();
        }
      },
    });
    const { code } = await Codemod.print(ast);
    await fs.writeFile(filename, code, { encoding: "utf-8" });
    // console.log(code);
  };
  await pmap(filenames, mapper, { concurrency: 8 });
});

const removeUnusedPrefix = Codemod.fn("removing unused prefix", async () => {
  const filenames = await globby(["src/client.ts", "src/cosmos.*/**/module.ts"], { absolute: true });
  const mapper = async (filename: string) => {
    console.log(`[ info    ] ${filename}`);
    const content = await fs.readFile(filename, { encoding: "utf-8" });
    const ast = await Codemod.parse(content);
    traverse(ast, {
      VariableDeclarator: (p1) => {
        if (t.isIdentifier(p1.node.id, { name: "signingClient" })) {
          p1.traverse({
            ObjectExpression: (p2) => {
              p2.traverse({
                ObjectProperty: (p3) => {
                  if (t.isIdentifier(p3.node.key, { name: "prefix" })) {
                    p3.remove();
                  }
                },
              });
            },
          });
        }
      },
    });
    const { code } = await Codemod.print(ast);
    await fs.writeFile(filename, code, { encoding: "utf-8" });
    // console.log(code);
  };
  await pmap(filenames, mapper, { concurrency: 8 });
});

const exportUnexported = Codemod.fn("exporting unexported", async () => {
  const filenames = await globby(["src/cosmos.*/**/*.ts", "!src/cosmos.*/**/registry.ts"], { absolute: true });
  const mapper = async (filename: string) => {
    console.log(`[ info    ] ${filename}`);
    const content = await fs.readFile(filename, { encoding: "utf-8" });
    const ast = await Codemod.parse(content);
    for (let i = 0; i < ast.program.body.length; i++) {
      const node = ast.program.body[i];
      if (
        node.type === "ClassDeclaration" ||
        node.type === "FunctionDeclaration" ||
        node.type === "VariableDeclaration" ||
        node.type === "TSInterfaceDeclaration" ||
        node.type === "TSTypeAliasDeclaration"
      ) {
        ast.program.body[i] = t.exportNamedDeclaration(node);
      }
    }
    const { code } = await Codemod.print(ast);
    await fs.writeFile(filename, code, { encoding: "utf-8" });
  };
  await pmap(filenames, mapper, { concurrency: 8 });
});

const run = async () => {
  await cleanupClient();
  await fixRestHeadersField();
  await removeUnusedPrefix();
  await exportUnexported();
};

void run();
