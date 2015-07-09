// Dependencies
var LevDist = require("levdist");

/**
 * LevArray
 * Returns the element with the lowest levenshtein distance value.
 *
 * @name LevArray
 * @function
 * @param {Array} data An array of strings.
 * @param {String} str The searched string.
 * @return {String} The element with the lowest levenshtein distance value.
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
