/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let l=0;
    let r=0;
    let sum = 0
    let res = nums.length+1;
    while(r<nums.length && l<=r){
        sum+=nums[r];
        while(sum>=target){
            res = Math.min(res,r-l+1)
            sum-=nums[l]
            l++
        }
        r++;
    }
    return res == nums.length + 1 ? 0 : res;
    
};