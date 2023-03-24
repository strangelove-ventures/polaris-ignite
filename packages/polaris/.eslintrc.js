// @ts-check

const { getTsconfigPath } = require("@strangelovelabs/style-guide/eslint/utils/tsconfig");

const tsconfigPath = getTsconfigPath();

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@strangelovelabs/style-guide/eslint/browser-node"),
    require.resolve("@strangelovelabs/style-guide/eslint/tsup"),
    require.resolve("@strangelovelabs/style-guide/eslint/typescript"),
  ],
  ignorePatterns: ["dist", "node_modules"],
  parserOptions: {
    project: tsconfigPath,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tsconfigPath,
      },
    },
  },
  root: true,
};

module.exports = eslintConfig;
