/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {


    let l = 0;
    r = 0;
    let disnictElements = new Set(nums).size

    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let set = new Set();
        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            if (set.size == disnictElements) {
                res++;
            }
        }
    }
    return res;

};