// 70. Climbing Stairs
// Solved
// Easy
// Topics
// Companies
// Hint
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

class Solution {

    public int climbStairs(int n) {
        //This will give time out error
        int oneStep = 0, twoSteps = 0;
        if (n == 1) return 1;
        if (n == 0) return 1;

        oneStep = climbStairs(n - 1);
        twoSteps = climbStairs(n - 2);

        return oneStep + twoSteps;
        //=================================

        int[] dp = new int[n+1];
        dp[n] = 1;
        dp[n - 1] = 1;
        for (int i= n - 2; i >= 0; i--) {
            dp[i] = dp[i + 1] + dp[i + 2];
            // System.out.println(dp[i]);
        }
        return dp[0];
// ===============================================
        int one = 1, two = 1;

        for (int i = 1; i < n; i++) {
            int temp = one;
            // System.out.println(one+" "+two +" "+i);
            one = one + two;
            two = temp;
        }
        return one;
    }
}
