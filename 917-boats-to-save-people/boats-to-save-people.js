/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b)
    let sum = limit;
   let left = 0;
    let right = people.length - 1;
    let boats = 0;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            // If the heaviest person and the lightest person can fit on the same boat,
            // then load both of them on the boat
            left++;
            right--;
        } else {
            // If only the heaviest person fits on the boat, then load only the heaviest person
            right--;
        }
        boats++; // Increment boat count for each iteration
    }

    return boats;
    return boats;
    
};