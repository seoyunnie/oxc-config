import type { OxlintConfig } from "oxlint";

/** An additional config for linting {@link https://react.dev/ | React} JSX files. */
export const reactConfig: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],

      plugins: ["react", "jsx-a11y"],
      rules: {
        /* Correctness */
        "eslint/no-unused-expressions": ["error", { enforceForJSX: true }],
        "react/no-find-dom-node": "off",
        "react/no-render-return-value": "off",
        "react/no-string-refs": "off",

        /* Suspicious */
        "import/no-unassigned-import": ["warn", { allow: ["**/*.css"] }],
        "react/react-in-jsx-scope": "off",

        /* Style */
        "react/jsx-curly-brace-presence": ["warn", { propElementValues: "always" }],
        "react/jsx-handler-names": ["warn", { checkInlineFunctions: true, checkLocalVariables: true }],
        "react/jsx-max-depth": "off",
        "react/jsx-props-no-spreading": "off",

        /* Pedantic */
        "react/jsx-no-target-blank": ["warn", { warnOnSpreadAttributes: true }],

        /* Restriction */
        "react/button-has-type": "error",
        "react/jsx-filename-extension": ["error", { allow: "as-needed", extensions: ["jsx", "tsx"] }],
        "react/no-clone-element": "error", //                                        eslint-plugin-react-x       - Recommended
        "react/no-danger": "error",
        "react/no-react-children": "error", //                                       eslint-plugin-react-x       - Recommended
        "react/no-unknown-property": ["error", { requireDataLowercase: true }], //   eslint-plugin-react         - Recommended
        "react/prefer-function-component": "error",
        "react/only-export-components": ["error", { allowConstantExport: true }], // eslint-plugin-react-refresh - Vite
      },
    },

    /* Covered by TypeScript */
    {
      files: ["**/*.tsx"],

      rules: {
        /* Correctness */
        "react/jsx-no-undef": "off",
      },
    },
  ],
};
