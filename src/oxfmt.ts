import type { OxfmtConfig } from "oxfmt";

/** The base config for formatting JS and TS files. */
const config: OxfmtConfig = {
  objectWrap: "collapse",
  printWidth: 120,
  sortImports: {
    groups: [
      "side_effect",
      "side_effect_style",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "style",
      "unknown",
    ],
  },
  sortPackageJson: { sortScripts: true },
};

export default config;
