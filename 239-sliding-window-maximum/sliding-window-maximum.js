/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let deque = [];
    let res = [];
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        // Remove elements smaller than current from the end of the deque
        while (deque.length && nums[r] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }

        deque.push(r);

        // Remove front element if it's outside the current window
        if (deque[0] < l) {
            deque.shift()
        }

        // Once we have a window of size k, record the maximum
        if (r + 1 >= k) {
            res.push(nums[deque[0]])
            l++
        }
    }
    return res
};