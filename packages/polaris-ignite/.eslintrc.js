// @ts-check

const { TYPESCRIPT_FILES } = require("@strangelovelabs/style-guide/eslint/constants");
const { getTsconfigPath } = require("@strangelovelabs/style-guide/eslint/utils/tsconfig");

const tsconfigPath = getTsconfigPath();

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@strangelovelabs/style-guide/eslint/browser-node"),
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
  rules: {
    camelcase: ["off"],
    "eslint-comments/disable-enable-pair": ["off"],
    "eslint-comments/no-unlimited-disable": ["off"],
    "no-param-reassign": ["off"],
    "unicorn/prefer-node-protocol": ["off"],
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      rules: {
        "@typescript-eslint/naming-convention": ["off"],
        "@typescript-eslint/no-unnecessary-condition": ["off"],
        "@typescript-eslint/no-unsafe-argument": ["warn"],
        "@typescript-eslint/no-unsafe-call": ["warn"],
        "@typescript-eslint/prefer-for-of": ["off"],
      },
    },
  ],
  root: true,
};

module.exports = eslintConfig;
