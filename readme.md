# github-parse-link [![Build Status](https://travis-ci.org/SamVerschueren/github-parse-link.svg?branch=master)](https://travis-ci.org/SamVerschueren/github-parse-link)

> Parse GitHub `link` header response


## Install

```
$ npm install --save github-parse-link
```


## Usage

```js
const parse = require('github-parse-link');

parse('<foo>; rel="next", <bar>; rel="last"');
//=> {next: 'foo', last: 'bar'}

parse('<foz>; rel="prev", <baz>; rel="first"');
//=> {prev: 'foz', first: 'baz'}
```


## API

### parse(input)

#### input

Type: `string`

The GitHub `link` header response to parse.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
