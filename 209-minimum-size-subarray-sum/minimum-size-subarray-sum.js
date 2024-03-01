var minSubArrayLen = function(target, nums) {
    // Initialize left pointer, right pointer, sum of subarray, and result
    let l = 0;
    let r = 0;
    let sum = 0;
    let res = nums.length + 1; // Initialize res to a value greater than nums.length
    
    // Loop until the right pointer reaches the end of the array
    while (r < nums.length) {
        // Expand the window by including nums[r] in the sum
        sum += nums[r];
        
        // Shrink the window until the sum is less than target
        while (sum >= target) {
            // Update result if the current subarray length is smaller
            res = Math.min(res, r - l + 1);
            // Shrink the window by excluding nums[l] from the sum
            sum -= nums[l];
            // Move the left pointer to the right
            l++;
        }
        
        // Move the right pointer to the right
        r++;
    }
    
    // Check if res has been updated, return 0 if not
    return res > nums.length ? 0 : res;
};
