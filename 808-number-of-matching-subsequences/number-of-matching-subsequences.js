/**
 * @param {string} s - The main string to check against.
 * @param {string[]} words - List of words to verify as subsequences of s.
 * @return {number} - Count of words that are subsequences of s.
 */
var numMatchingSubseq = function (s, words) {
    let dict = {};

    // Step 1: Map each character in `s` to all its indices.
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!dict[char]) dict[char] = [];
        dict[char].push(i);
    }

    /**
     * Finds the smallest index in dict[char] that is greater than prev.
     * Uses binary search for efficiency.
     * @param {char} char - The character to search in s.
     * @param {number} prev - Previous matched index in s.
     * @return {number} - Next index of char > prev, or -1 if not found.
     */
    function getNextIndex(char, prev) {
        const positions = dict[char];
        if (!positions) return -1;

        // Binary search to find first position > prev
        let l = 0, r = positions.length - 1;
        let res = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (positions[mid] > prev) {
                res = positions[mid];
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }

    let count = 0;

    // Step 2: Check each word in words
    for (let word of words) {
        let prev = -1;
        let match = true;

        // Check if word is subsequence of s using binary search
        for (let char of word) {
            prev = getNextIndex(char, prev);
            if (prev === -1) {
                match = false;
                break; // Not a subsequence
            }
        }

        if (match) count++; // Valid subsequence
    }

    return count;
};
