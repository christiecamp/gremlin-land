//JavaScript (ESM) - use .eslintrc.cjs when running ESLint in JavaScript packages that specify 'type':'module' in their package.json.

//ESLint automatically looks for the file in the directory of the file to be linted, and in successive parent directories all the way up to the root directory of the filesystem (/), the home directory of the current user (~/), or when root: true is specified. 

//ESLint will stop looking in a directory when it finds an .eslintrc.* file containing root: true.

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
