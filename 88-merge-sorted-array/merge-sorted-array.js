/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let left = m-1, right = n-1;
    let index = m+n - 1;

    // Traverse both arrays and merge elements into nums1 in-place
    while (left >=0 && right >= 0) {
        if (nums1[left] >= nums2[right]) {
            nums1[index] = nums1[left];
            left--;
        } else {
            nums1[index] = nums2[right];
            right--;
        }
        index--;
    }

    // If there are remaining elements in nums2, append them to nums1
    while (right >= 0) {
        nums1[index] = nums2[right];
        right--;
        index--;
    }
};