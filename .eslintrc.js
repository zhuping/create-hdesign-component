module.exports = {
  root: true,
  env: {
    "node": true
  },
  extends: ["eslint:recommended"],
  rules: {
    "no-console": "off",
    "semi": [1]
  },
  parserOptions: {
    ecmaVersion: 12
  }
};