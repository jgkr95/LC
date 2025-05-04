/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

    let dp = Array(n + 1).fill(n);

    dp[0] = 0;

    for (let target = 1; target <= n; target++) {
        for (let i = 1; i < target + 1; i++) {
            let square = i * i

            if (target - square < 0) {
                break;
            }
            dp[target] = Math.min(dp[target], 1 + dp[target - square])
        }
    }

    return dp[n]

};