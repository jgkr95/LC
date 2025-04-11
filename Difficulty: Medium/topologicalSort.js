/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let n = grid.length;
    let m = grid[0].length;

    let vis = Array(n).fill(0).map(() => Array(m).fill(0))

    // Check left and right borders

    for (let i = 0; i < n; i++) {
        if (grid[i][0] == 1 && !vis[i][0]) {
            dfs(i, 0, grid, vis, n, m)
        }
        if (grid[i][m-1] == 1 && !vis[i][m-1]) {
            dfs( i, m - 1, grid, vis, n, m)
        }
    }

    // Check top and bottom borders

    for (let i = 0; i < m; i++) {
        if (grid[0][i] == 1 && !vis[0][i]) {
            dfs(i, n - 1, grid, vis, n, m)
        }
        if (grid[n-1][i] == 1 && !vis[n - 1][i]) {
            dfs(n - 1, i, grid, vis, n, m)
        }
    }

    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!vis[i][j] && grid[i][j] == 1) {
                res++;
            }
        }
    }

    return res

};

function dfs(row, col, grid, vis, n, m) {
    vis[row][col] = true;

    delRow = [-1, 0, 1, 0]
    delCol = [0, 1, 0, -1]

    for (let i = 0; i < 4; i++) {
        let dRow = delRow[i] + row
        let dCol = delCol[i] + col;
        if (dRow >= 0 && dRow < n && dCol >= 0 && dCol < m && !vis[dRow][dCol] && grid[dRow][dCol] == 1) {
            dfs(dRow, dCol, grid, vis, n, m)
        }
    }
}
