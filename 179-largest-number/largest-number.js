/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if (nums.length === 0) {
        return '0';
    }

    // Sort numbers based on their concatenated values
    nums.sort((a, b) => ('' +b+a > '' +a+b ? 1 : -1));

    // If the largest number is '0', return '0'
    if (nums[0] === 0) {
        return '0';
    }

    // Join sorted numbers to form the largest number
    return nums.join('');
};