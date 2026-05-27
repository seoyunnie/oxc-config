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
        "vitest/valid-title": ["error", { allowArguments: true }],

        /* Style */
        "eslint/no-magic-numbers": "off",
        "vitest/max-expects": "off",
        "vitest/max-nested-describe": "off",
        "vitest/no-hooks": "off",
        "vitest/no-importing-vitest-globals": "off",
        "vitest/no-large-snapshots": "off",
        "vitest/no-restricted-matchers": "off",
        "vitest/no-restricted-vi-methods": "off",
        "vitest/prefer-called-times": "off",
        "vitest/prefer-expect-assertions": "off",
        "vitest/prefer-lowercase-title": ["warn", { ignoreTopLevelDescribe: true }],
        "vitest/prefer-to-be-falsy": "off",
        "vitest/prefer-to-be-truthy": "off",
      },
    },
  ],
};
