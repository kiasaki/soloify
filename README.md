# soloify

[![Build Status](https://travis-ci.org/kiasaki/soloify.svg)](https://travis-ci.org/kiasaki/soloify)

Simple transform to compile [solo](https://github.com/kiasaki/solo-lisp) to JavaScript when using [Browserify](https://github.com/substack/node-browserify).

## Example

```sh
npm install --save browserify
npm install --save soloify
```

```js
var browserify = require('browserify');

browserify('file.sl')
    .transform('soloify')
    .bundle(done);
```
