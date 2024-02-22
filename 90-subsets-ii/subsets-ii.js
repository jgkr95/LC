/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a,b)=>a-b);
    function bt(ind,subset){
        if(ind==nums.length){
            res.push([...subset]);
            return;
        }
        subset.push(nums[ind]);
        bt(ind+1,subset);
        subset.pop();
        while(ind+1<nums.length && nums[ind]==nums[ind+1]){
            ind++;
        }
        bt(ind+1,subset);
    }
    bt(0,[])
        return res;
};