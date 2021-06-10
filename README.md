[![npm (scoped)](https://img.shields.io/npm/v/@0xc/invisihash)](https://www.npmjs.com/package/@0xc/invisihash)
[![npm](https://img.shields.io/npm/dt/@0xc/invisihash)](https://www.npmjs.com/package/@0xc/invisihash)
[![GitHub issues](https://img.shields.io/github/issues/tcarrio/invisihash)](https://github.com/tcarrio/invisihash/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/tcarrio/invisihash)](https://github.com/tcarrio/invisihash/pulls)
![Dependencies](https://img.shields.io/badge/dependencies-0-orange)

# invisihash

generate a zero-width (*rendered*) hash with popular algorithms such as SHA-256.

## install

you can install using `npm` or `yarn`:

```sh
npm install @0xc/invisihash

yarn add @0xc/invisihash
```

## examples

```js
import { hash } from "@0xc/invisihash";

const someValue = JSON.stringify(arguments);
const output = hash(someValue, "sha384");
```

the default algorithm is `sha256` and is not required to be passed

```js
hash("hello world");
```

## why does this even exist

Confluence requires unique titles and allows unicode so 🚀🚀🚀