//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

class Node {
    constructor(x) {
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        let grid = new Array();
        for (let i = 0; i < n; i++) {
            input_line = readLine().split(" ");
            let g = new Array(m);
            for (let j = 0; j < m; j++) {
                g[j] = parseInt(input_line[j]);
            }
            grid.push(g);
        }

        let obj = new Solution();
        let ans = obj.nearest(grid);
        for (let i = 0; i < ans.length; i++) {
            let s = "";
            for (let j = 0; j < ans[i].length; j++) s += ans[i][j] + " ";
            console.log(s);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} grid
 * @returns {number[][]}
 */
class Solution {
    // Function to find distance of nearest 1 in the grid for each cell.
    nearest(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let front = 0;
        
        let vis = new Array(n).fill(0).map(() => new Array(m).fill(0));
        let dist = new Array(n).fill(0).map(() => new Array(m).fill(0));
        let queue = []
        
        for(let i=0; i < n; i++){
            for(let j=0; j < m; j++){
                if(grid[i][j]==1){
                    queue.push([[i,j],0])
                    vis[i][j] = 1;
                }else{
                    vis[i][j] = 0;
                }
            }
        }
        
        let delRow = [-1, 0 , 1, 0]
        let delCol = [0, 1, 0, -1]
        
        while(front < queue.length){
            
            let cur = queue[front++];
            
            let row = cur[0][0];
            let col = cur[0][1];
            let steps = cur[1];
            
            dist[row][col] = steps;
            
            // Four directions
            for(let i = 0; i < 4; i++){
                let dRow = delRow[i] + row;
                let dCol = delCol[i] + col;
                if(dRow >= 0 && dRow < n && dCol >= 0 && dCol < m && vis[dRow][dCol] == 0){
                    queue.push([[dRow,dCol],steps+1]);
                    vis[dRow][dCol] = 1;
                }
            }
        }
        
        return dist;
        
    }
}