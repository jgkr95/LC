/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let prefixSum = {0:1};
    let curSum=0;
    let res=0;

    for(let i=0;i<nums.length;i++){
        curSum += nums[i];
        let diff = curSum - k;

        res += prefixSum[diff] || 0;

        prefixSum[curSum] = (prefixSum[curSum] || 0) + 1;
    }

    return res;

    
};