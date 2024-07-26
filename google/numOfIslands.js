/**
 * @param {string[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0
  }
  let nums = 0
  let rows = grid.length
  let cols = grid[0].length

  const dfs = (grid, row, col) => {
    if (row <0 || col < 0 || row >= rows || col >= cols || grid[row][col] === '0') {
      return
    }

    grid[row][col] = "0"
    dfs(grid, row + 1, col)
    dfs(grid, row - 1, col)
    dfs(grid, row, col + 1)
    dfs(grid, row, col -1)
  }


  for (let i = 0; i < rows; i++) {
    for (let j  =0; j < cols; j++) {
      if (grid[i][j] === "1") {
        nums++
        dfs(grid, i, j)
      }
    }
  }

  console.log(nums)
};

numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]])
