// @ts-check

const { extendEslint } = require("@strangelovelabs/style-guide");
const { TYPESCRIPT_FILES } = require("@strangelovelabs/style-guide/eslint/constants");

module.exports = extendEslint(["browser-node", "typescript"], {
  ignorePatterns: ["dist"],
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
});
