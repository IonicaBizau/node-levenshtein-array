
# levenshtein-array [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/levenshtein-array.svg)](https://www.npmjs.com/package/levenshtein-array) [![Downloads](https://img.shields.io/npm/dt/levenshtein-array.svg)](https://www.npmjs.com/package/levenshtein-array) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Levenshtein distance for an array.

## :cloud: Installation

```sh
$ npm i --save levenshtein-array
```


## :clipboard: Example



```js
// Dependencies
var LevenshteinArray = require("levenshtein-array");

console.log(
    LevenshteinArray([
        "principal"
      , "principle"
      , "prince"
      , "prism"
    ], "princedom")
);
// => [{ l: 3, w: 'prince' }
//   , { l: 4, w: 'principal' }
//   , { l: 4, w: 'principle' }
//   , { l: 5, w: 'prism' } ]
```

## :memo: Documentation


### `LevArray(data, str)`
Finds the Levenshtein distance of an array, sorting it then.

#### Params
- **Array** `data`: An array of strings.
- **String** `str`: The searched string.

#### Return
- **Array** An array of objects like this (it's sorted by levdist):
 - `l` (Number): The Levenshtein distance value.
 - `w` (String): The word.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bible.js`](https://github.com/BibleJS/bible.js)—The Bible as a NPM module.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
