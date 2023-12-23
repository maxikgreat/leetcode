/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const map = {}

  for (let i = 0; i < isConnected.length; i++) {
    map[i] = []
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1) {
        map[i].push(j)
      }
    }
  }

  console.log(map)

  const visited = new Set()
  let count = 0

  const dfs = (node) => {
    if (visited.has(node)) {
      return 0
    }

    visited.add(node)

    let connectedNodes = map[node]

    for (const node of connectedNodes) {
      dfs(node)
    }

    return 1
  }

  for (const key in map) {
    count += dfs(Number(key))
  }

  console.log(count)
};

findCircleNum([
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
])
