var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    
    // Binary search to find the row where the target might be located
    while (top <= bottom) { // Adjusted condition
        const mid = Math.floor((top + bottom) / 2);
        if (matrix[mid][0] === target) {
            return true;
        } else if (matrix[mid][0] < target) {
            top = mid + 1;
        } else {
            bottom = mid - 1;
        }
    }
    
    const row = bottom; // Adjusted row calculation
    if (row < 0 || row >= m) {
        return false; // Target row is out of bounds
    }
    
    // Binary search within the specific row to find the target
    let left = 0;
    let right = n - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[row][mid] === target) {
            return true;
        } else if (matrix[row][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};

