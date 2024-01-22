// 283. Move Zeroes to end
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

class Solution {

    public void swap(int[] nums, int a, int b) {
        int temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }

    public void moveZeroes(int[] nums) {
        int n = nums.length;
        if (n == 1) return;
        int i = 0, j = -1;
        while (i < n) {
            if (nums[i] == 0) {
                j = i;
                break;
            }
            i++;
        }
        if (j == -1) return;

        for (i = j + 1; i < n; i++) {
            if (nums[i] != 0) {
                swap(nums, i, j);
                j++;
            }
        }
        // i=j+1;
        // while(i<n){
        //     if(nums[i]!=0){
        //         int temp = nums[i];
        //         nums[i]=nums[j];
        //         nums[j]=temp;
        //         j++;
        //     }
        //         i++;
        // }
        // return nums;
    }
}
