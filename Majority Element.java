// Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

class Solution {
    public int majorityElement(int[] nums) {
        int count=0;
        int res=nums[0];
        int n=nums.length;
        for(int i=0;i<nums.length;i++){
            if(count == 0){
                count=1;
                res = nums[i];
            }else if(res==nums[i]){
                count++;
            }else{
                count--;
            }
        }


        // count=0;
        // for(int i=0;i<n;i++){
        //     if(res==nums[i]) count++;
        // if count > n/2 then it is majority element
        // But here assumed there is majoirty element, if not check above condition as weel
        // }

        return res;
    }
}