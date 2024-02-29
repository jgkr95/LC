/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let sum = 0;
    let res = 0;
    let l=0;
    for(let i=0;i<nums.length;i++){
        while(((nums[i] & sum) !=0)){
            sum -= nums[l];
            l++;
        }
        sum+=nums[i];
        res=Math.max(res,i-l+1)
    }
    return res;
    
};