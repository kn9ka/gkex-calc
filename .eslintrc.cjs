/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ["css-modules"],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // Base config
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "stylelint",
    "prettier",
  ],
  rules: {
    curly: ["error", "all"],
    "no-nested-ternary": "error",
    "import/no-cycle": "error",
    "n/no-unsupported-features/node-builtins": "off",
    "n/prefer-global/process": "off",
    // No importing external modules
    "import/no-extraneous-dependencies": ["error", { packageDir: "./" }],
    // A function can only have up to 3 parameters - if you need more use an object!
    "max-params": ["error", 3],
    // More explicit control on imports and their order
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
        groups: [
          "external",
          "builtin",
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          // Hoist TSConfig paths into their own group
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
          // Extract CSS into their own group
          {
            pattern: "./**/*.{css,scss}",
            group: "index",
            position: "after",
          },
        ],
        distinctGroup: true,
      },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    // Allow no comments when re-enabling an eslint rule
    "eslint-comments/require-description": [
      "error",
      { ignore: ["eslint-enable"] },
    ],
  },

  overrides: [
    // React
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {},
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
      },
      rules: {
        "react/prop-types": "off",
        "react/display-name": "off",
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/sort-type-constituents": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        // Use 'type' keyword with type imports
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            disallowTypeAnnotations: false,
            fixStyle: "inline-type-imports",
            prefer: "type-imports",
          },
        ],
        // This allows us to use `as T` type assertions
        "@typescript-eslint/consistent-type-assertions": "off",
        // We use the @typescript-eslint version of this rule
        "no-unused-vars": "off",
        // This is handled by TypeScript
        "n/no-missing-import": "off",
        // We use the @typescript-eslint version of this rule
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "warn",
      },
    },
  ],
};
