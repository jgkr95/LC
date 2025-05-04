/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

     // Initialize a DP array of size n + 1
    // Fill it with n (maximum count of 1^2 needed to sum to n)
    let dp = Array(n + 1).fill(n);

    // Base case: 0 can be formed with 0 numbers
    dp[0] = 0;

    // Build up the solution for all targets from 1 to n
    for (let target = 1; target <= n; target++) {
        // Try every square number less than or equal to the current target
        for (let i = 1; i < target + 1; i++) {
            let square = i * i;

            // If the square is greater than the target, no point in continuing
            if (target - square < 0) {
                break;
            }

            // Update the DP value with the minimum number of squares needed
            dp[target] = Math.min(dp[target], 1 + dp[target - square]);
        }
    }

    // The result for n is stored in dp[n]
    return dp[n];

};