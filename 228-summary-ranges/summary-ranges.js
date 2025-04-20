/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = []

    for(let i=0;i<nums.length;i++){
        let start=i;
        while(i<nums.length && nums[i]+1 == nums[i+1]){
            i++;
        }
        end = i
        if(nums[start] == nums[end]){
            res.push(String(nums[i]))
        }else{
            res.push(`${nums[start]}->${nums[end]}`)
        }
    }
    return res
    
};