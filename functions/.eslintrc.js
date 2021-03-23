module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    sourceType: "module",
  },
  "prettier/prettier": [
    "warn",
    {
      "printWidth": 100,
      "tabWidth": 2,
      "singleQuote": false,
      "trailingComma": "es5",
      "semi": true
    }
  ],
};
