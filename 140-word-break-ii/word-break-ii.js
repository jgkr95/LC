/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {

    const wordSet = new Set(wordDict) // Converting to set for faster lookup

    const map = {}

    function dfs(start) {
        // If the result for current index is already calculated, return it
        if (map[start]) {
            return map[start]
        }

        // If we have reached the end of the string, return an empty array
        if (start == s.length)
            return ['']

        const sentences = [];

        // Try all possible partitions from the current index
        for (let end = start + 1; end <= s.length; end++) {
            // If the substring from start to end is in the wordDict
            if (wordSet.has(s.substring(start, end))) {

                // Recursively find sentences starting from the next index
                const nextSentences = dfs(end);

                // Append current word to each sentence and add to results
                for (let sentence of nextSentences) {
                    if (sentence) {
                        sentences.push(s.substring(start, end) + " " + sentence)
                    } else {
                        sentences.push(s.substring(start, end))
                    }
                }
            }
        }

        // Store the result for current index in map
        map[start] = sentences
        return sentences;
    }

    return dfs(0)

};