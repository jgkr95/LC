/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let cnt = 0
    let filtered = ''
    for (const char of s) {
        if (char == '(') {
            filtered += char
            cnt++
        } else if (char == ')' && cnt > 0) {
            filtered += char
            cnt--
        } else if (char != ')') {
            filtered += char
        }
    }

    let res = ''
    for (const char of filtered.split('').reverse()) {
        if (char == '(' && cnt > 0) {
            cnt--;
        } else {
            res += char
        }
    }
    return res.split('').reverse().join('')
};