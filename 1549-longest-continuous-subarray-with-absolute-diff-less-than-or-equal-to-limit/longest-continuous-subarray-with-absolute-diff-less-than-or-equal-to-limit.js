/**
 * Finds the length of the longest subarray such that 
 * the absolute difference between the maximum and minimum 
 * elements is less than or equal to the given limit.
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} limit - Maximum allowed difference between max and min in subarray
 * @return {number} - Length of the longest such subarray
 */
var longestSubarray = function (nums, limit) {
    let res = 0; // To store the length of the longest valid subarray
    let l = 0;   // Left pointer of the sliding window

    // Deques to store the max and min values in the current window
    let maxQ = [];
    let minQ = [];

    // Right pointer of the sliding window
    for (let r = 0; r < nums.length; r++) {

        // Maintain the decreasing order in maxQ
        while (maxQ.length && nums[r] > maxQ[maxQ.length - 1]) {
            maxQ.pop();
        }

        // Maintain the increasing order in minQ
        while (minQ.length && nums[r] < minQ[minQ.length - 1]) {
            minQ.pop();
        }

        // Push the current number into both queues
        maxQ.push(nums[r]);
        minQ.push(nums[r]);

        // If the current window becomes invalid (difference exceeds limit)
        while (maxQ[0] - minQ[0] > limit) {
            // Remove the leftmost element if it equals the max or min
            if (nums[l] === maxQ[0]) maxQ.shift();
            if (nums[l] === minQ[0]) minQ.shift();
            l++; // Shrink the window from the left
        }

        // Update result with the size of the current valid window
        res = Math.max(res, r - l + 1);
    }

    return res; // Return the maximum length found
};
