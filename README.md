# RelativeCI agent CLI setup example for Vite

[![RelativeCI](https://badges.relative-ci.com/badges/aIIUqxw2fv4CbgI2an7u?branch=master)](https://app.relative-ci.com/projects/aIIUqxw2fv4CbgI2an7u)

## Install

### `@relative-ci/agent`

```shell
npm install --dev @relative-ci/agent
```

or 

```shell
yarn add --dev @relative-ci/agent
```

### `rollup-plugin-webpack-stats`

```shell
npm install --dev rollup-plugin-webpack-stats
```

or 

```shell
yarn add --dev rollup-plugin-webpack-stats
```

## Configure

### `rollup-plugin-webpack-stats`

Output Vite stats JSON with a webpack stats structure supported by `@relative-ci/agent`

```js
// vite.config.js
import { defineConfig } from 'vite';
import { webpackStats } from 'rollup-plugin-webpack-stats';

export default defineConfig((env) => ({
  plugins: [
    // Output webpack-stats.json file
    webpackStats(),
  ],
}));
```

### `@relative-ci/agent`

```js
// relativeci.config.js
module.exports = {
  webpack: {
    // Path to Webpack stats JSON file
    stats: './dist/webpack-stats.json'
  }
};
```

[Read more](https://relative-ci.com/documentation/setup/agent/cli)

## Run @relative-ci/agent CLI on CI

### Environment variables

#### `RELATIVE_CI_KEY` 

(**Required**) Navigate to https://app.relative-ci.com, go to the project Settings -> API Keys page and copy the project API key.

#### `RELATIVE_CI_SLUG`

(**Required for unsupported CI services**) Set your GitHub project slug (eg: `webpack/webpack.js.org`) if your CI service is not supported (https://github.com/semantic-release/env-ci#supported-ci).

#### `RELATIVE_CI_ENDPOINT`

(**Required for Enterprise Cloud customers**)


### GitHub action

```yaml
# .github/workflow/build.yml
name: Build
on: push
jobs:
  build:
    steps:
    - name: Build application & bundle stats 
      run: npm run build

    - name: Send bundle stats and build information to RelativeCI
      run: npx relative-ci-agent
      env:
        RELATIVE_CI_KEY: ${{ secrets.RELATIVE_CI_KEY }}
```

### CircleCI

```yaml
# .circleci/config.yml
version: 2
jobs:
  build:
    steps:
      # ...
      - run:
          name: Build application & webpack stats
          command: npm run build
      - run:
          name: Send bundle stats and build information to Relative CI
          command: npx relative-ci-agent
```
