// 128. Longest Consecutive Sequence
// Solved
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

class Solution {
    public int longestConsecutive(int[] nums) {
        int n = nums.length;
        if (n == 0)
            return 0;
        int longest = Integer.MIN_VALUE;
        Set<Integer> hashSet = new HashSet();
        for (int num : nums)
            hashSet.add(num);

        for (int num : nums) {
            if (!hashSet.contains(num - 1)) {
                int curLength = 0;
                while (hashSet.contains(num + curLength))
                    curLength += 1;

                longest = Math.max(longest, curLength);
            }

        }
        return longest;
    }
}