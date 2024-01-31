// 322. Coin Change
// Solved
// Medium
// Topics
// Companies
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
                
        // Initialize the array with a value larger than any possible number of coins
        Arrays.fill(dp, amount + 1); // amount+1 can be Integer.MAX_VALUE

        dp[0] = 0;// Base case: 0 coins needed to make amount 0

        for (int i = 1; i <= amount; i++) {
            // Iterate through all coin denominations
            for (int coin : coins) {
                // Check if the current coin can contribute to the current amount
                if (i - coin >= 0 && dp[i - coin] != amount + 1)
                    // Update the minimum number of coins needed for the current amount
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }

        return dp[amount] == amount + 1 ? -1 : dp[amount];
    }
}