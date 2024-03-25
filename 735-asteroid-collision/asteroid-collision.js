/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack=[]
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];

        // Check if the stack is empty or the asteroid is moving right
        if (stack.length === 0 || asteroid > 0) {
            stack.push(asteroid); // Push the asteroid into the stack
        } else {
            // Handle asteroid collision with stack elements moving right
            while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
                stack.pop(); // Remove smaller asteroids moving right
            }

            // Check if the stack is empty or the top of the stack is also moving left
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroid); // Push the asteroid into the stack
            } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
                stack.pop(); // Destroy both asteroids if they are of equal size
            }
        }
    }

    return stack;

};