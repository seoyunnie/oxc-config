import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { oxfmt: "./src/oxfmt.ts", oxlint: "./src/oxlint/index.ts" },
  minify: true,
  fixedExtension: false,
  dts: true,
  exports: { devExports: true },
});
