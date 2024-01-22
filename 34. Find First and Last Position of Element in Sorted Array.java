// 34. Find First and Last Position of Element in Sorted Array
// Solved
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]


class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};

        // Search for the leftmost occurrence of the target
        int leftIndex = binarySearch(nums, target, true);


        // Search for the rightmost occurrence of the target
        int rightIndex = binarySearch(nums, target, false);

        // Update the result array with the starting and ending positions
        result[0] = leftIndex;
        result[1] = rightIndex;

        return result;
    }

    // Helper method for binary search to find either the leftmost or rightmost occurrence of the target
    private static int binarySearch(int[] nums, int target, boolean findLeftmost) {
        int low = 0;
        int high = nums.length - 1;
        int i=-1;
        while (low <= high) {
            int mid = (low + high) / 2;

            if (nums[mid] > target ) {
                high = mid-1; 
            } else if(nums[mid]<target){
                low = mid + 1;
            }else {
                i=mid;
                if(findLeftmost)
                    high = mid-1;
                else low = mid+1;
            }
        }

        return i;
    }

}