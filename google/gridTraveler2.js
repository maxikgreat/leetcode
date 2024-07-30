const gridTraveler = (n, m) => {
  let count = 0

  const grid = Array.from({length: n + 1}).map(() => new Array(m + 1).fill(0))
  grid[1][1] = 1

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      if (typeof grid[i + 1] !== 'undefined')
      grid[i + 1][j] += grid[i][j]
      if(typeof grid[i][j + 1] !== 'undefined')
      grid[i][j + 1] += grid[i][j]
    }
  }
  // for (let i = ; i)
  console.log(grid)
}

console.log(gridTraveler(3, 3))
