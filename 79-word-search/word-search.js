/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;

    const pathVisited = Array(board.length).fill(0).map(() => Array(board[0].length).fill(false))

    function dfs(r, c, i) {
        if (i == word.length) return true;
        if (r > rows - 1 || c > cols - 1 || r < 0 || c < 0 || word[i] != board[r][c] || pathVisited[r][c]) return false

        const delRow = [-1, 0, 1, 0]
        const delCol = [0, 1, 0, -1]
        pathVisited[r][c] = true

        for (let x = 0; x < 4; x++) {
            const row = r + delRow[x]
            const col = c + delCol[x]
            if (dfs(row, col, i + 1)) return true;
        }
        pathVisited[r][c] = false
        return false
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false

};