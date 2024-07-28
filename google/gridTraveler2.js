const gridTraveler = (n, m) => {
  const grid = []

  for (let i = 0; i < n; i++) {
    grid[i] = []
    for (let j = 0; j < m; j++) {
      grid[i][j] = 0
    }
  }

  grid[0][0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const currentWays = grid[i][j]
      if (i + 1 < n) {
        grid[i + 1][j] += currentWays
      }
      if (j + 1 < m) {
        grid[i][j + 1] += currentWays
      }
    }
  }

  return grid[n, m]
}

gridTraveler(2, 3)
