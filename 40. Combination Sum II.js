// 40. Combination Sum II
// Solved
// Medium
// Topics
// Companies
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
    const res = [];
    function backtrack(start, comb, curSum) {
      if (target === curSum) {
        res.push([...comb]);
        return;
      }
      for (let i = start; i < candidates.length; i++) {
          if (i > start && candidates[i] === candidates[i - 1]) {
          // Skip duplicates to avoid duplicate combinations
          continue;
        }
        if (curSum + candidates[i] <= target) {
          comb.push(candidates[i]);
          backtrack(i + 1, comb, curSum + candidates[i]);
          comb.pop();
        }
      }
    }
    candidates.sort((a, b) => a - b);// Sort the candidates to handle duplicates
    backtrack(0, [], 0);
    return res;
  };
  