var wordBreak = function(s, wordDict) {
    const res = [];
    
    // Function to generate all possible words starting from a given index
    function getWords(index, s) {
        let words = [];
        for (let i = index; i < s.length; i++) {
            words.push(s.substring(index, i + 1));
        }
        return words;
    }
    
    // Depth-first search function to explore all possible word combinations
    function dfs(startIndex, path) {
        // If we have reached the end of the string, add the current path to results
        if (startIndex === s.length) {
            res.push(path.join(' '));
        }
        
        // Explore all possible edges (words) starting from the current index
        for (let edge of getWords(startIndex, s)) {
            if (wordDict.includes(edge)) { // If the current edge (word) is in wordDict
                path.push(edge); // Add the current edge to the path
                dfs(startIndex + edge.length, path); // Recur with the updated start index
                path.pop(); // Backtrack by removing the last added word from the path
            }
        }
    }
    
    // Start depth-first search from index 0 with an empty path
    dfs(0, []);
    
    // Return the list of all valid sentences
    return res;
};

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