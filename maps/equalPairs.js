/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
  const rows = []
  for (let i = 0; i < grid.length; i++) {
    let row = []
    for (let j = 0; j < grid.length; j++) {
      row.push(grid[j][i])
    }
    rows.push(row)
  }

  // const transposed = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]))

  // console.log(transposed)

  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (JSON.stringify(grid[i]) === JSON.stringify(grid[j])) {
        count++
      }
    }
  }

  return count
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))
