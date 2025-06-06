/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {

    let max = Math.max(...arr)
    let res = -1;
    let closestDiff = Infinity;

    let l = 0, r = max;

    function mutatedSum(num) {
        return arr.reduce((prev, cur) => { return prev + (cur > num ? num : cur) }, 0)
    }

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        let currSum = mutatedSum(mid)
        let diff = Math.abs(currSum - target)
        if (diff < closestDiff || (diff == closestDiff && mid < res)) {
            res = mid;
            closestDiff = diff;
        }
        if (currSum < target){
            l=mid+1
        }else{
            r = mid-1;
        }

    }
    return res

};