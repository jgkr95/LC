/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let countGap = {}
    let maxGaps = 0;
    for (let i = 0; i < wall.length; i++) {
        let sum = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j]
            countGap[sum] = (countGap[sum] || 0) + 1
            console.log("countGap[sum]",countGap[sum],sum)
            maxGaps = Math.max(maxGaps, countGap[sum])
        }
    }
    return wall.length - maxGaps;

};