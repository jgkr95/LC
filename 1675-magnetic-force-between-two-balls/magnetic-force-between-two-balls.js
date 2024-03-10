/**
 * Finds the maximum minimum distance between any two balls placed along a line of positions.
 * @param {number[]} position - An array representing the positions of potential ball placements (sorted).
 * @param {number} m - The number of balls to place.
 * @return {number} - The maximum minimum distance between any two balls.
 */
var maxDistance = function(position, m) {
    // Sort the positions in ascending order
    position.sort((a, b) => a - b);

    // Calculate the maximum possible distance between the first and last position
    let max = position[position.length - 1] - position[0];
    let res = 0;

    // Iterate 0 to max for bruteforce

    // Binary search for the maximum minimum distance
    let low = 1, high = max;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canPlaceBalls(position, mid, m)) {
            res = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Return the maximum minimum distance found
    return res;
};

/**
 * Checks if it's possible to place 'm' balls with a minimum distance 'dist' along the given positions.
 * @param {number[]} arr - An array representing the positions of potential ball placements (sorted).
 * @param {number} dist - The minimum distance between any two balls.
 * @param {number} m - The number of balls to place.
 * @return {boolean} - Indicates if it's possible to place 'm' balls with the given minimum distance.
 */
function canPlaceBalls(arr, dist, m) {
    let noOfBalls = 1; // Start with 1 ball placed at the first position
    let last = arr[0];

    // Iterate through the positions to check if balls can be placed with minimum distance 'dist'
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - last >= dist) {
            noOfBalls++; // Increment the count of placed balls
            last = arr[i]; // Update the position of the last placed ball
        }
    }

    // Check if the number of placed balls is at least 'm'
    return noOfBalls >= m;
}
