module.exports = {
  plugins: ["react"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    semi: ["error", "always"],
    "react/jsx-uses-vars": [2],
    "react/no-unescaped-entities": [0]
  },
  "env": {
    "browser": true
  }
};