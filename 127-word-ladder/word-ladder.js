/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    // Convert wordList to a Set for O(1) lookups
    let set = new Set(wordList);

    if(!set.has(endWord)) return 0

    // Initialize queue with the starting word and initial step count
    let queue = [];
    queue.push([beginWord, 1]);

    let front = 0;

    // Perform BFS
    while (front < queue.length) {
        let [word, steps] = queue[front++];

        // Try changing each character of the current word
        for (let i = 0; i < word.length; i++) {
            for (let charCode = 97; charCode <= 122; charCode++) { // 'a' to 'z'
                const char = String.fromCharCode(charCode);

                // Form a new word by replacing one character
                const newWord = word.slice(0, i) + char + word.slice(i + 1);

                // If new word is the target, return the steps + 1
                if (newWord === endWord) return steps + 1;

                // If new word is in the set (unvisited)
                if (set.has(newWord)) {
                    queue.push([newWord, steps + 1]); // Add it to the queue
                    set.delete(newWord); // Mark as visited
                }
            }
        }
    }

    // If no transformation sequence found
    return 0;
};
