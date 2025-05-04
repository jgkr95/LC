/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let cnt = 0; // Counter to track unmatched opening parentheses
    let filtered = [];

    // First pass: remove extra closing parentheses
    for (const char of s) {
        if (char === '(') {
            filtered.push(char);
            cnt++; // Track an unmatched opening parenthesis
        } else if (char === ')' && cnt > 0) {
            filtered.push(char);
            cnt--; // Match it with a previous '('
        } else if (char !== ')') {
            // Just push any non-parenthesis or characters other than extra ')'
            filtered.push(char);
        }
        // Extra ')' are skipped automatically
    }

    let res = [];

    // Second pass: remove unmatched opening parentheses from the end
    for (const char of filtered.reverse()) {
        if (char === '(' && cnt > 0) {
            cnt--; // Skip this unmatched '('
        } else {
            res.push(char); // Keep valid characters
        }
    }

    // Reverse again to restore the original order
    return res.reverse().join('');
};