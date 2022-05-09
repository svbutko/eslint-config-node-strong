# eslint-config-node-strong

[![npm-version](https://img.shields.io/npm/v/eslint-config-node-strong)](https://www.npmjs.com/package/eslint-config-node-strong)
[![npm-downloads](https://img.shields.io/npm/dt/eslint-config-node-strong)](https://www.npmjs.com/package/eslint-config-node-strong)

[![GitHub Followers](https://img.shields.io/github/followers/svbutko?label=Follow%20%40svbutko&style=social)](https://github.com/svbutko)
[![Twitter Follow](https://img.shields.io/twitter/follow/svbutko?label=Follow%20%40svbutko&style=social)](https://twitter.com/svbutko)

<a href="https://www.buymeacoffee.com/svbutko"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=svbutko&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

ESLint strong (strict) config for NodeJS development

## Quick start

### Installation

#### yarn

```sh
yarn add -D eslint eslint-config-node-strong @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jest
```

#### npm

```sh
npm install --save-dev eslint eslint-config-node-strong @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-jest
```

### Usage

Add `"node-strong"` to the "extends" array in your `.eslintrc.*` file. Make sure to put it **last,** so it gets the chance to override other configs.

```json
{
  "extends": [
    "...",
    "node-strong"
  ]
}
```

## Plugins included in this project

- [@typescript-eslint/eslint-plugin]
- [eslint-plugin-import]
- [eslint-plugin-jest]

[@typescript-eslint/eslint-plugin]: https://github.com/typescript-eslint/typescript-eslint
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
