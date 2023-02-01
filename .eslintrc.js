module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
    },
  ],
};
