# Oxlint and Oxfmt Configs

My personal project's shared base configurations for [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) and
[Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html). These remove the need to copy-paste configs between my
projects. They are based on common conventions (e.g.,
[Google's style guide](https://google.github.io/styleguide/tsguide.html)) and my personal preferences and coding style.

The following configs are exported for Oxlint:

|              Config              | Description                                                                |
| :------------------------------: | -------------------------------------------------------------------------- |
|  [`base`](./src/oxlint/base.ts)  | The base config for linting JS and TS files.                               |
|  [`test`](./src/oxlint/test.ts)  | An additional config for linting [Vitest](https://vitest.dev/) test files. |
| [`react`](./src/oxlint/react.ts) | An additional config for linting [React](https://react.dev/) JSX files.    |

There's only one [base config](./src/oxfmt.ts) exported for Oxfmt.

## Installation

Install `@seoyunnie/oxc-config` as a dev dependency:

```shell
pnpm add -D @seoyunnie/oxc-config
```

> [!IMPORTANT]
> This package has **required** peer dependencies; install them if not already:
>
> ```shell
> pnpm add -D oxfmt oxlint oxlint-tsgolint
> ```

## Usage

### Extending an Oxlint Config

Use the `extends` field to inherit from one or more base configs.

```typescript
import { baseConfig } from "@seoyunnie/oxc-config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [baseConfig],
  // ...
});
```

### Extending the Oxfmt Config

Spread the base config object to (shallow) copy the formatting options.

```typescript
import baseConfig from "@seoyunnie/oxc-config/oxfmt";
import { defineConfig } from "oxfmt";

export default defineConfig({
  ...baseConfig,
  // ...
});
```
