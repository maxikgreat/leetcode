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

  const colStrings = grid.map(col => col.join(''))
  const rowStrings = rows.map(row => row.join(''))

  const matches = []
  colStrings.forEach(col => {
    matches.push(rowStrings.filter(row => row === col))
  })

  rowStrings.forEach(row => {
    matches.push(colStrings.filter(col => col === row))
  })

  return new Set(matches).size
};

equalPairs([
  [11,1],
  [1,11]
])
