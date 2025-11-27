/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let dp = Array(len).fill(1);
    let res=1;
    for(let i=0;i<len;i++){
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i]=Math.max(dp[i],1 + dp[j])
            }
        }
        res = Math.max(res,dp[i])
    }
    return res
};