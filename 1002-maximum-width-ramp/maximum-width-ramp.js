/**
 * Finds the maximum width ramp in an array.
 * A ramp is a pair (i, j) where i <= j and nums[i] <= nums[j].
 * The width of the ramp is j - i.
 * 
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The maximum width of a valid ramp.
 */
var maxWidthRamp = function (nums) {
    let n = nums.length;

    // Create an array to store the maximum values from the right.
    let maxRight = Array(n).fill(0);
    maxRight[n - 1] = nums[n - 1];

    // Fill maxRight so that maxRight[i] is the maximum value in nums[i..n-1]
    for (let i = n - 2; i >= 0; i--) {
        maxRight[i] = Math.max(nums[i], maxRight[i + 1]);
    }

    let l = 0; // Left pointer
    let res = 0; // Store the result (maximum width found)

    // Iterate over possible right pointers
    for (let r = 1; r < n; r++) {
        // Move left pointer forward while the ramp condition is not satisfied
        while (nums[l] > maxRight[r]) {
            l++;
        }
        // Update result if a valid ramp is found with a greater width
        res = Math.max(r - l, res);
    }

    return res;
};
