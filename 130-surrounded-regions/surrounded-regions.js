/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let n = board.length;
    let m = board[0].length;
    let vis = Array(n).fill(0).map(()=>Array(m).fill(0));

  // Left and Right borders
    for (let i = 0; i < n; i++) {
        if (board[i][0] === 'O' && !vis[i][0]) {
            dfs(i, 0, board, vis, n, m);
        }
        if (board[i][m - 1] === 'O' && !vis[i][m - 1]) {
            dfs(i, m - 1, board, vis, n, m);
        }
    }

    // Top and Bottom borders
    for (let j = 0; j < m; j++) {
        if (board[0][j] === 'O' && !vis[0][j]) {
            dfs(0, j, board, vis, n, m);
        }
        if (board[n - 1][j] === 'O' && !vis[n - 1][j]) {
            dfs(n - 1, j, board, vis, n, m);
        }
    }

    for(let i = 0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!vis[i][j] && board[i][j] == 'O')

                board[i][j] = 'X';
        }
    }
};

function dfs(row, col, board, vis, n, m){
    vis[row][col] = true;

    let delRow = [-1, 0 , 1, 0]
    let delCol = [0, 1, 0, -1]

    // 4 directions up,left,down,right
    for(let i=0; i < 4; i++){
        let dRow = row + delRow[i];
        let dCol = col + delCol[i];
        if(dRow >= 0 && dRow < n && dCol >= 0 && dCol < m && board[dRow][dCol]=='O' && !vis[dRow][dCol]){
            dfs(dRow, dCol, board, vis, n, m)
        }
    }
}