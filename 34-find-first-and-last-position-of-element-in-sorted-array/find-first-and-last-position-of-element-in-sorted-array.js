/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    function search(isFirst) {
        let l = 0;
        let r = nums.length - 1;
        let res = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] == target) {
                res = mid;
                if (isFirst)
                    r = mid - 1
                else
                    l = mid + 1
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1
            }
        }
        return res
    }

    let left = search(true)
    let right = search(false)

    return [left, right]
};