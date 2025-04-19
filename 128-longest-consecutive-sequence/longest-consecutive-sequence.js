/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums)
    let longest = 0

    for(num of numSet){
        // Only start a sequence if num is the start of it
        if(!numSet.has(num-1)){
            let length=1;
            while(numSet.has(num+1)){
                num++;
                length++;
            }
            longest=Math.max(longest,length)
        }
    }
    return longest
    
};