import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-debugger": "error", // Disallow debugger statements
      "eqeqeq": ["error", "always"], // Require === and !==
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all", // Check all variables
          args: "after-used", // Ignore unused arguments if they are after used ones
          varsIgnorePattern: "^React$", // Ignore React import warnings
        },
      ],
      "react/react-in-jsx-scope": "off", // Disable React in scope rule for JSX (modern React versions)
      "react/jsx-uses-react": "off", // Disable rule for unused React in JSX
      "react/prop-types": "off", // Disable prop-types rule if you're using TypeScript
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
