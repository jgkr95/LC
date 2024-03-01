/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // Initialize lower bound (minimum possible capacity) as the maximum weight among the weights
    let l = Math.max(...weights);
    // Initialize upper bound (maximum possible capacity) as the sum of all weights
    let r = weights.reduce((c, n) => c + n, 0);
    // Initialize the result to the maximum possible capacity
    let res = r;

    // Function to check if it's possible to ship all weights within given capacity and days
    function canShip(cap) {
        let curCap = cap; // Initialize current capacity
        let shipsOrDays = 1; // Initialize number of ships or days needed

        // Iterate through each weight
        for (let w of weights) {
            // If adding the weight exceeds the current capacity
            if (curCap - w < 0) {
                curCap = cap; // Reset current capacity for a new ship
                shipsOrDays++; // Increment number of ships or days needed
            }
            curCap -= w; // Subtract weight from current capacity
        }
        // Return true if the number of ships or days needed is less than or equal to given days
        return shipsOrDays <= days;
    }

    // Binary search loop
    while (l <= r) {
        // Calculate mid-capacity using binary search
        let capacity = Math.ceil((l + r) / 2);
        // If it's possible to ship all weights within this capacity
        if (canShip(capacity)) {
            // Update result to be the minimum of current result and capacity
            res = Math.min(res, capacity);
            // Adjust upper bound for smaller capacities
            r = capacity - 1;
        } else {
            // Adjust lower bound for larger capacities
            l = capacity + 1;
        }
    }

    // Return the minimum capacity required to ship all weights within given days
    return res;
};
