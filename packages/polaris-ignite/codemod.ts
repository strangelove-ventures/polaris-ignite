import * as fs from "node:fs/promises";
import * as path from "node:path";
import { performance } from "node:perf_hooks";

import * as t from "@babel/types";
import { globby } from "globby";
import * as m from "magicast";

const codemod = async () => {
  await cleanupClient();
  await fixRestHeadersField();
  await removeUnusedPrefix();
  await exportUnexported();
};

const cleanupClient = async () => {
  const t0 = performance.now();
  console.log("start cleaning up client");

  const filename = path.join(process.cwd(), "src/client.ts");
  const content = await fs.readFile(filename, { encoding: "utf-8" });

  const mod = m.parseModule(content);
  t.assertProgram(mod.$ast);

  // remove first line comment for possibility of triple slash directive
  // @ts-expect-error comments field actually exists
  delete mod.$ast.body[0].comments;

  t.traverse(mod.$ast, {
    enter: (node, parent) => {
      // traverse to ignite client's `signAndBroadcast` method to remove redundant `await` keyword
      if (t.isClassMethod(node) && t.isIdentifier(node.key, { name: "signAndBroadcast" })) {
        t.traverseFast(node, (node2) => {
          if (t.isReturnStatement(node2) && t.isAwaitExpression(node2.argument)) {
            node2.argument = node2.argument.argument;
          }
        });
      }

      // traverse to `@keplr-wallet/types` import declaration to delete it
      if (t.isImportDeclaration(node) && t.isStringLiteral(node.source, { value: "@keplr-wallet/types" })) {
        const { node: programNode, index } = parent[0];
        t.assertProgram(programNode);
        delete programNode.body[index];
      }

      // traverse to `useKeplr` method to delete it
      if (t.isClassMethod(node) && t.isIdentifier(node.key, { name: "useKeplr" })) {
        const { node: bodyNode, index } = parent.at(-1);
        t.assertClassBody(bodyNode);
        delete bodyNode.body[index];
      }
    },
  });

  await m.writeFile(mod.$ast, filename);
  // console.log(`${m.generateCode(mod).code}\n`);

  const t1 = performance.now();
  console.log(`finished cleaning up client in ${Math.round((t1 - t0) / 100) / 10}s`);
};

const fixRestHeadersField = async () => {
  const t0 = performance.now();
  console.log("start fixing rest headers field");

  const filenames = await globby(["src/cosmos.*/**/rest.ts"], { absolute: true });
  for await (const filename of filenames) {
    const mod = await m.loadFile(filename);
    t.traverseFast(mod.$ast, (node) => {
      if (t.isClassMethod(node) && t.isIdentifier(node.key, { name: "mergeRequestParams" })) {
        t.traverseFast(node, (node2) => {
          if (t.isObjectProperty(node2) && t.isIdentifier(node2.key, { name: "headers" })) {
            // force assign comments field because for some reason it does not exist on babel-types declaration
            Object.assign(node2, {
              comments: [
                {
                  type: "CommentLine",
                  value: " @ts-expect-error force merge headers",
                  leading: true,
                  trailing: false,
                },
              ],
            });
          }
        });
      }
    });
    await m.writeFile(mod.$ast, filename);
    // console.log(`${m.generateCode(mod).code}\n`);
  }

  const t1 = performance.now();
  console.log(`finished fixing rest headers field in ${Math.round((t1 - t0) / 100) / 10}s`);
};

const removeUnusedPrefix = async () => {
  const t0 = performance.now();
  console.log("start removing unused prefix");

  const filenames = await globby(["src/client.ts", "src/cosmos.*/**/module.ts"], { absolute: true });
  for await (const filename of filenames) {
    const mod = await m.loadFile(filename);
    t.traverseFast(mod.$ast, (node) => {
      if (t.isVariableDeclarator(node) && t.isIdentifier(node.id, { name: "signingClient" })) {
        t.traverseFast(node, (node2) => {
          if (t.isObjectExpression(node2)) {
            t.traverse(node2, {
              enter: (node3, parent3) => {
                if (t.isObjectProperty(node3) && t.isIdentifier(node3.key, { name: "prefix" })) {
                  const { node: objectNode, index } = parent3[0];
                  t.assertObjectExpression(objectNode);
                  delete objectNode.properties[index];
                }
              },
            });
          }
        });
      }
    });
    await m.writeFile(mod.$ast, filename);
    // console.log(`${m.generateCode(mod).code}\n`);
  }

  const t1 = performance.now();
  console.log(`finished removing unused prefix in ${Math.round((t1 - t0) / 100) / 10}s`);
};

const exportUnexported = async () => {
  const t0 = performance.now();
  console.log("start exporting unexported");

  const filenames = await globby(["src/cosmos.*/**/module.ts"], { absolute: true });
  for await (const filename of filenames) {
    const mod = await m.loadFile(filename);
    t.assertProgram(mod.$ast);
    for (let i = 0; i < mod.$ast.body.length; i++) {
      const node = mod.$ast.body[i];
      if (
        node.type === "ClassDeclaration" ||
        node.type === "FunctionDeclaration" ||
        node.type === "TSInterfaceDeclaration" ||
        node.type === "TSTypeAliasDeclaration"
      ) {
        mod.$ast.body[i] = t.exportNamedDeclaration(node);
      }
    }
    await m.writeFile(mod.$ast, filename);
    // console.log(`${m.generateCode(mod).code}\n`);
  }

  const t1 = performance.now();
  console.log(`finished exporting unexported in ${Math.round((t1 - t0) / 100) / 10}s`);
};

void codemod();
