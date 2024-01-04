/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {},
  globals: {},
  extends: ['ts-prefixer', 'plugin:jsx-a11y/recommended',],
  parser: '@typescript-eslint/parser',
  plugins: ['jsx-a11y'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'off',
  },
  settings: {},
  overrides: [
    {
      files: ['.ts,.tsx,.js,.jsx,.cjs,.mjs'],
      parserOptions: {
        project: ['./packages/react-client/tsconfig.json']
      },
    },
  ],
}