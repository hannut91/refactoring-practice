module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  globals: {
    context: 'readonly',
  },
  parser: 'babel-eslint',
  rules: {
  },
};
