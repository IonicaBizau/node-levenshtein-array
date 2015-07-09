// Dependencies
var LevDist = require("levdist");

/**
 * LevArray
 * Finds the Levenshtein distance of an array, sorting it then.
 *
 * @name LevArray
 * @function
 * @param {Array} data An array of strings.
 * @param {String} str The searched string.
 * @return {Array} An array of objects like this (it's sorted by levdist):
 *
 *  - `l` (Number): The Levenshtein distance value.
 *  - `w` (String): The word.
 */
function LevArray (data, str) {
    var result = [];
    for (var i = 0; i < data.length; ++i) {
        var cWord = data[i];
        result.push({
            l: LevDist(cWord, str)
          , w: cWord
        });
    }
    result.sort(function (a, b) {
        return a.l > b.l ? 1 : -1;
    });
    return result;
}

module.exports = LevArray;
