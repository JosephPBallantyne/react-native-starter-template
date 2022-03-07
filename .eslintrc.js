module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native'],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['**/node_modules/*'],
};
