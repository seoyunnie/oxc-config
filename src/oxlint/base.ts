import type { OxlintConfig } from "oxlint";

/** The base config for linting JS and TS files. */
export const baseConfig: OxlintConfig = {
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "node", "promise"],
  categories: { correctness: "error", suspicious: "warn", style: "warn", perf: "warn", pedantic: "warn" },
  rules: {
    /* Suspicious */
    "typescript/consistent-return": "off",

    /* Style */
    "eslint/capitalized-comments": "off",
    "eslint/func-names": ["warn", "as-needed"],
    "eslint/func-style": ["warn", "declaration", { allowArrowFunctions: true, allowTypeAnnotation: true }],
    "eslint/grouped-accessor-pairs": ["warn", "getBeforeSet", { enforceForTSTypes: true }],
    "eslint/id-length": "off",
    "eslint/init-declarations": "off",
    "eslint/max-params": "off",
    "eslint/max-statements": "off",
    "eslint/no-continue": "off",
    "eslint/no-labels": ["warn", { allowLoop: true, allowSwitch: true }],
    "eslint/no-magic-numbers": [
      "warn",
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        ignoreClassFieldInitialValues: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "eslint/no-ternary": "off",
    "eslint/prefer-const": ["warn", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "eslint/sort-imports": ["warn", { ignoreDeclarationSort: true }],
    "eslint/sort-keys": "off",
    "import/consistent-type-specifier-style": "off",
    "import/exports-last": "off",
    "import/group-exports": "off",
    "import/no-duplicates": ["warn", { preferInline: true }],
    "import/no-named-export": "off",
    "import/no-nodejs-modules": "off",
    "import/prefer-default-export": "off",
    "typescript/consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: true }],
    "typescript/no-empty-interface": ["warn", { allowSingleExtends: true }],
    "unicorn/catch-error-name": ["warn", { ignore: ["^e$", "^err$", "^[a-z_$][A-Za-z0-9_$]*[Ee]rr$"] }],
    "unicorn/no-nested-ternary": "off",
    "unicorn/no-null": "off",
    "unicorn/prefer-ternary": ["warn", "only-single-line"],
    "unicorn/relative-url-style": ["warn", "always"],
    "unicorn/switch-case-braces": ["warn", "avoid"],

    /* Pedantic */
    "eslint/eqeqeq": ["warn", "always", { null: "ignore" }],
    "eslint/max-classes-per-file": "off",
    "eslint/max-depth": "off",
    "eslint/max-lines": "off",
    "eslint/max-lines-per-function": "off",
    "eslint/max-nested-callbacks": "off",
    "eslint/no-inline-comments": "off",
    "eslint/no-throw-literal": "off",
    "eslint/require-await": "off",
    "eslint/sort-vars": "off",
    "import/max-dependencies": "off",
    "typescript/prefer-readonly-parameter-types": "off",

    /* Restriction */
    "eslint/no-empty": "error", //                                                               @eslint/js            - Recommended
    "eslint/no-empty-function": "error",
    "eslint/no-proto": "error",
    "eslint/no-use-before-define": "error",
    "eslint/no-sequences": "error",
    "eslint/no-var": "error",
    "import/no-cycle": "error",
    "node/handle-callback-err": "error",
    "oxc/bad-bitwise-operator": "error",
    "promise/catch-or-return": "error", //                                                       eslint-plugin-promise - Recommended
    "typescript/explicit-function-return-type": ["error", { allowExpressions: true }],
    "typescript/explicit-module-boundary-types": "error",
    "typescript/no-dynamic-delete": "error", //                                                  @typescript-eslint    - Strict
    "typescript/no-empty-object-type": ["error", { allowInterfaces: "with-single-extends" }], // @typescript-eslint    - Recommended
    "typescript/no-explicit-any": "error", //                                                    @typescript-eslint    - Recommended
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-invalid-void-type": "error", //                                               @typescript-eslint    - Strict
    "typescript/no-namespace": "error", //                                                       @typescript-eslint    - Recommended
    "typescript/no-non-null-asserted-nullish-coalescing": "error", //                            @typescript-eslint    - Strict
    "typescript/non-nullable-type-assertion-style": "error", //                                  @typescript-eslint    - Stylistic
    "typescript/promise-function-async": "error",
    "typescript/use-unknown-in-catch-callback-variable": "error", //                             @typescript-eslint    - Strict
    "unicorn/no-abusive-eslint-disable": "error", //                                             eslint-plugin-unicorn - Unopinionated
    "unicorn/no-array-for-each": "error", //                                                     eslint-plugin-unicorn - Unopinionated
    "unicorn/no-document-cookie": "error", //                                                    eslint-plugin-unicorn - Unopinionated
    "unicorn/no-length-as-slice-end": "error", //                                                eslint-plugin-unicorn - Unopinionated
    "unicorn/no-process-exit": "error", //                                                       eslint-plugin-unicorn - Unopinionated
    "unicorn/no-useless-error-capture-stack-trace": "error", //                                  eslint-plugin-unicorn - Unopinionated
    "unicorn/prefer-modern-math-apis": "error", //                                               eslint-plugin-unicorn - Unopinionated
    "unicorn/prefer-node-protocol": "error", //                                                  eslint-plugin-unicorn - Unopinionated
    "unicorn/prefer-number-properties": "error", //                                              eslint-plugin-unicorn - Unopinionated
  },

  overrides: [
    /* Config Files */
    {
      files: ["*.config.{js,cjs,mjs,ts,cts,mts}"],

      rules: {
        /* Style */
        "import/no-anonymous-default-export": ["warn", { allowArray: true, allowObject: true }],
      },
    },

    /* Covered by TypeScript */
    {
      files: ["**/*.{ts,cts,mts,tsx}"],

      rules: {
        /* Correctness */
        "eslint/constructor-super": "off",
        "eslint/no-class-assign": "off",
        "eslint/no-const-assign": "off",
        "eslint/no-dupe-class-members": "off",
        "eslint/no-dupe-keys": "off",
        "eslint/no-func-assign": "off",
        "eslint/no-new-native-nonconstructor": "off",
        "eslint/no-obj-calls": "off",
        "eslint/no-redeclare": "off",
        "eslint/no-setter-return": "off",
        "eslint/no-this-before-super": "off",
        "eslint/no-unsafe-negation": "off",
      },
    },
  ],
};
