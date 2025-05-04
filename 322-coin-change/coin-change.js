/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

   // Initialize dp array with amount+1 (infinity placeholder)
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0; // 0 coins needed to make amount 0

    // Build up the dp array from 1 to amount
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                // Take the min of current or using this coin
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    // If no combination found, return -1
    return dp[amount] > amount ? -1 : dp[amount];
};