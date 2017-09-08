## Documentation

You can see below the API reference of this module.

### `LevArray(data, str)`
Finds the Levenshtein distance of an array, sorting it then.

#### Params

- **Array** `data`: An array of strings.
- **String** `str`: The searched string.

#### Return
- **Array** An array of objects like this (it's sorted by levdist):
 - `l` (Number): The Levenshtein distance value.
 - `w` (String): The word.

