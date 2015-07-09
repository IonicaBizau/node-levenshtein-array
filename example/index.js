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
// => "prince"
