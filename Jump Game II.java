// Jump Game II
// Solved
// Medium
// Topics
// Companies
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

class Solution {
    public int jump(int[] nums) {
        int l=0,r=0,res=0;
        while(r<nums.length-1){
            int longestJump = 0;
            for(int i=l;i<r+1;i++){
                longestJump = Math.max(longestJump,i+ nums[i]);
            }
            l=r+1;
            r=longestJump;
            res++;
        }
        return res;
//======================================================

        for(int i=1;i<nums.length;i++){
            nums[i]=Math.max(nums[i]+i,nums[i-1]);
        }
        int res=0,i=0;
        while(i<nums.length-1){
            i=nums[i];
            res++;
        }
        return res;

        ///==============================================
        int res=0;
        int end=0;
        int far=0;
        for(int i=0; i<nums.length-1; i++){
            far=Math.max(far,(i+nums[i]));
            if(far>=nums.length-1){
                return ++res;
            }
            if(i==end){ //visited all item in current level
                res++;  // increment level
                end = far;  //queue size for next level
            }
            
        }
        return res;
        //=======================================================
    }
}