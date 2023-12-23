/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const map = new Map()

  for (let i = 0; i < connections.length; i++) {
    const [a, b] = connections[i]

    if (!map.has(a)) {
      map.set(a, [b])
    } else {
      map.set(a, [...map.get(a), b])
    }
  }

  console.log(map)
};

minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]])
