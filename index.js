var LevDist = require("levdist");

module.exports = function (data, str) {
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
};
