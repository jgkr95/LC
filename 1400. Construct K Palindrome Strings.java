// 1400. Construct K Palindrome Strings
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

 

// Example 1:

// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"
// Example 2:

// Input: s = "leetcode", k = 3
// Output: false
// Explanation: It is impossible to construct 3 palindromes using all the characters of s.
// Example 3:

// Input: s = "true", k = 4
// Output: true
// Explanation: The only possible solution is to put each character in a separate string.

class Solution {
    public boolean canConstruct(String s, int k) {
        Map<Character, Integer> charFreq = new HashMap<>();

        if (s.length() < k)
            return false;

        for (char a : s.toCharArray()) {
            charFreq.put(a, charFreq.getOrDefault(a, 0) + 1);
        }

        int oddCount = 0;
        for (int a : charFreq.values()) {
            if (a % 2 == 1)
                oddCount++;
        }

        if (oddCount > k)
            return false;

        return true;

        int[] freq = new int[26];
        for (char ch : s.toCharArray())
            freq[ch - 'a']++;

        int n = s.length(), odd = 0;

        for (int f : freq)
            if (f % 2 != 0)
                odd++;
        if (k > n || odd > k)
            return false;

        return true;
    }
}