/**
 * @param {number[][]} wall - A 2D array representing rows of bricks in a wall
 * @return {number} - The minimum number of bricks the vertical line crosses
 */
var leastBricks = function(wall) {
    // Object to store the number of times a gap (edge between bricks) occurs at a position
    let countGap = {};
    // Track the maximum number of aligned gaps at the same position
    let maxGaps = 0;

    // Iterate through each row in the wall
    for (let i = 0; i < wall.length; i++) {
        let sum = 0; // Sum represents the current position in the row
        // Go through all bricks in the row except the last one
        // because we shouldn't count the far-right edge of the wall
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j]; // Compute the position of the current gap
            countGap[sum] = (countGap[sum] || 0) + 1; // Count how many times this position occurs

            // Update the maximum gap count
            maxGaps = Math.max(maxGaps, countGap[sum]);
        }
    }

    // Minimum number of bricks crossed = total rows - max aligned gaps
    return wall.length - maxGaps;
};
