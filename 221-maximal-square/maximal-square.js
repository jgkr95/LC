// /**
//  * @param {character[][]} matrix
//  * @return {number}
//  */
// var maximalSquare = function(matrix) {
//     let rows = matrix.length, col= matrix[0].length
//     let cache = Array.from({ length: rows}, () => Array(col).fill(undefined));

//     function helper(i,j){
//         if(i>=rows || j >= col){
//             return 0;
//         }
//         if(!cache[i][j]){
//             down = helper(i+1,j)
//             right = helper(i,j+1)
//             diag = helper(i+1,j+1)

//             cache[i][j]=0;
//             if(matrix[i][j] == '1'){
//                 cache[i][j] = 1 + Math.min(down,Math.min(right,diag))
//             }
//         }
//         return cache[i][j]
//     }

//     helper(0,0);
//     console.log(matrix)
//     console.log(cache)

//     res = Math.max(...cache.flat())
//     return res * res;

// };

var maximalSquare = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let cache = Array.from({ length: rows}, () => Array(cols).fill(-1));

    function helper(i, j) {
        if (i >= rows || j >= cols) {
            return 0;
        }
        if (cache[i][j] !== -1) {
            return cache[i][j];
        }
        let down = helper(i + 1, j);
        let right = helper(i, j + 1);
        let diag = helper(i + 1, j + 1);
        let result = 0;
        if (matrix[i][j] === '1') {
            result = 1 + Math.min(down, Math.min(right, diag));
        }
        cache[i][j] = result;
        return result;
    }

    // for (let i = 0; i < rows; i++) {
    //     for (let j = 0; j < cols; j++) {
            helper(0, 0);
    //     }
    // }

    let maxSide = Math.max(...cache.flat());
    return maxSide * maxSide;
};
