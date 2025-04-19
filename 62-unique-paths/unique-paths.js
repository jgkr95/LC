/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let rowDp = Array(n).fill(1)
    for (let i = 1; i < m; i++) {
        let newRowDp = Array(n).fill(1)
        for (let j = 1; j < n; j++) {
            const up = rowDp[j];
            const left = newRowDp[j - 1]
            newRowDp[j] = up + left;
        }
        rowDp = newRowDp;
    }

    return rowDp[n - 1];

};