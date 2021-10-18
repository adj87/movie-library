module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  ignorePatterns: ["reportWebVitals.ts", "craco.config.js", "tailwind.config.js"],
  rules: {
    "no-unused-vars": 1,
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-module-boundary-types": 2,
    semi: [2, "always"],
    quotes: [
      2,
      "double"
    ]
  }
};
