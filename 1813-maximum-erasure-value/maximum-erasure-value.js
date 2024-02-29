/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {

    let set = new Set()
    let res = 0;
    let sum = 0;
    let l=0;
    for(let i=0;i<nums.length;i++){
        while(set.has(nums[i])){
            set.delete(nums[l]);
            sum = sum - nums[l];
            l++;
        }
        set.add(nums[i]);
        sum+=nums[i];
        res = Math.max(res,sum);
    }
    return res;
};