/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const res = new Set(); // to store unique valid results
    const queue = [s];
    const visited = new Set([s]);
    let found = false;

    // Helper to check if a string is valid
    function isValid(str) {
        let balance = 0;
        for (let ch of str) {
            if (ch === '(') balance++;
            else if (ch === ')') {
                balance--;
                if (balance < 0) return false;
            }
        }
        return balance === 0;
    }

    while (queue.length) {
        const curr = queue.shift();

        if (isValid(curr)) {
            res.add(curr);
            found = true;
        }

        if (found) continue; // skip further levels if valid result is found

        // Generate all possible strings by removing one parenthesis
        for (let i = 0; i < curr.length; i++) {
            if (curr[i] !== '(' && curr[i] !== ')') continue;
            const next = curr.slice(0, i) + curr.slice(i + 1);
            if (!visited.has(next)) {
                queue.push(next);
                visited.add(next);
            }
        }
    }

    return Array.from(res);
};
