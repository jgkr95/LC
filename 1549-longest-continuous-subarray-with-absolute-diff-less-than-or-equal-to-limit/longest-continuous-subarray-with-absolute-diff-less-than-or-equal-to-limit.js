/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {

    let res = 0
    let l = 0;
    let maxQ = []
    let minQ = []
    for (let r = 0; r < nums.length; r++) {
        while (maxQ.length && nums[r] > maxQ[maxQ.length - 1]) {
            maxQ.pop()
        }
        while (minQ.length && nums[r] < minQ[minQ.length - 1]) {
            minQ.pop()
        }
        maxQ.push(nums[r])
        minQ.push(nums[r])

        while (maxQ[0] - minQ[0] > limit) {
            if (nums[l] == maxQ[0]) maxQ.shift()
            if (nums[l] == minQ[0]) minQ.shift()

            l++;
        }

        res = Math.max(res, r - l + 1)
    }

    return res

};