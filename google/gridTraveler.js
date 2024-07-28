const gridTraveler = (n, m) => {
  const dfs = (i, j, memo = {}) => {
    const key = i + ':' + j
    if (key in memo) {
      return memo[key]
    }

    if (i  === n - 1 && j === m - 1) {
     return 1
    }

    if (i >= n || j >= m) {
      return 0
    }

    const ways = dfs(i + 1, j, memo) + dfs(i, j + 1, memo)
    memo[key] = ways

    return ways
  }

  return dfs(0, 0)
}

console.log(gridTraveler(3, 3))
