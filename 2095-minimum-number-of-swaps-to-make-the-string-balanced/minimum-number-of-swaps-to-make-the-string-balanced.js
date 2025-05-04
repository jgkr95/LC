/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let maxClose = 0, close = 0;

    for (const char of s) {
        if (char == '[') {
            close--;
        } else if (char == ']') {
            close++
        }

        maxClose = Math.max(maxClose, close)
    }

    return parseInt((maxClose + 1) / 2)
};