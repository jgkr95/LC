/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let rows = matrix.length, col = matrix[0].length
    let cache = Array.from({ length: rows }, () => Array(col).fill(-1));
    console.log(cache)
    function helper(i, j) {
        if (i >= rows || j >= col) {
            return 0;
        }
        if (cache[i][j] != -1) return cache[i][j];

        let down = helper(i + 1, j);
        let right = helper(i, j + 1);
        let diag = helper(i + 1, j + 1);

        let result = 0;
        if (matrix[i][j] == '1') {
            result = 1 + Math.min(down, Math.min(right, diag));
        }
        cache[i][j] = result;
        return result;
    }

    helper(0, 0);
    console.log(cache)

    res = Math.max(...cache.flat())
    console.log(res)
    return res * res;

};