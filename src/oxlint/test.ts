import type { OxlintConfig } from "oxlint";

/** An additional config for linting {@link https://vitest.dev/ | Vitest} test files. */
export const testConfig: OxlintConfig = {
  overrides: [
    {
      files: ["**/*.test.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],

      plugins: ["vitest"],
      rules: {
        /* Correctness */
        "vitest/consistent-each-for": "off",

        /* Style */
        "eslint/no-magic-numbers": "off",
        "vitest/no-importing-vitest-globals": "off",
        "vitest/prefer-called-times": "off",
        "vitest/prefer-to-be-falsy": "off",
        "vitest/prefer-to-be-truthy": "off",
      },
    },
  ],
};
