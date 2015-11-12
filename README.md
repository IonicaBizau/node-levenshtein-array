# levenshtein-array [![Support this project][donate-now]][paypal-donations]

Levenshtein distance for an array.

## Installation

```sh
$ npm i levenshtein-array
```

## Example

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

## Documentation

### `LevArray(data, str)`
Finds the Levenshtein distance of an array, sorting it then.

#### Params
- **Array** `data`: An array of strings.
- **String** `str`: The searched string.

#### Return
- **Array** An array of objects like this (it's sorted by levdist):
 - `l` (Number): The Levenshtein distance value.
 - `w` (String): The word.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bible.js`](https://github.com/BibleJS/bible.js)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2014

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md