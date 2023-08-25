/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {},
  globals: {},
  extends: ['ts-prefixer'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: [],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
  },
  settings: {},
  overrides: [],
}
