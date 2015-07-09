// Dependencies
var LevenshteinArray = require("../lib");

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

