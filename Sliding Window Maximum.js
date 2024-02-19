// Sliding Window Maximum
// Solved
// Hard
// Topics
// Companies
// Hint
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let deque = []; // We should maintain deque always in monotonically decreasing order like 9,7,6,2....
  let l = 0,
    r = 0;
  while (r < nums.length) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
      deque.pop();
    }
    deque.push(r);

    if (l > deque[0]) deque.shift();
    if (r + 1 >= k) {
      res.push(nums[deque[0]]);
      l++;
    }
    r++;
  }
  return res;
  //=======================================
  let res = [];
  let deque = [];
  for (let i = 0; i < nums.length; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    if (deque[0] <= i - k) deque.shift();
    deque.push(i);
    if (i >= k - 1) res.push(nums[deque[0]]);
  }
  return res;
};
