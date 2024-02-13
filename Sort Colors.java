// Sort Colors
// Solved
// Medium
// Topics
// Companies
// Hint
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

class Solution {
    public void sortColors(int[] nums) {
        int i=0,l=0,n=nums.length;
        int r=n-1;
        while(i<=r){
            // checking till right pointer
            if(nums[i]==0){
                // Shift all zeroes to left
                swap(nums,i,l);
                l++;
                i++;
            }else if(nums[i]==2){
                // Shift all 2's to right
                swap(nums,r,i);
                r--;
            }else{
                //middle ones will be 1's
                i++;
            }
        }
    }

    public void swap(int[] arr,int i,int j){
        int temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}