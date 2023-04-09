import * as fs from "node:fs/promises";
import { performance } from "node:perf_hooks";

import prettierConfig from "@strangelovelabs/style-guide/prettier";
import { globby } from "globby";
import pmap from "p-map";
import * as prettier from "prettier";

const format = async () => {
  const t0 = performance.now();
  console.log(`[ start   ] formatting src files`);
  const filenames = await globby(["src/**/*.ts"], { absolute: true });
  const mapper = async (filename: string) => {
    console.log(`[ info    ] ${filename}`);
    let content = await fs.readFile(filename, { encoding: "utf-8" });
    content = prettier.format(content, { parser: "typescript", ...prettierConfig });
    await fs.writeFile(filename, content, { encoding: "utf-8" });
  };
  await pmap(filenames, mapper, { concurrency: 8 });
  const t1 = performance.now();
  console.log(`[ success ] formatting src files in ${t1 - t0}ms`);
};

void format();
