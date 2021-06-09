# invisihash

generate a zero-width (*rendered*) hash with popular algorithms such as SHA-256.

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