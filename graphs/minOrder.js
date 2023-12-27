/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const from = new Map(), to = new Map();

  // Function to insert in values in map
  const insert = (map, key, value) => {
    if(map.has(key)){
      const arr = map.get(key);
      arr.push(value);
      map.set(key, arr);
    } else {
      map.set(key, [value]);
    }
  }

  // Set all values in both maps
  for(const [a,b] of connections){
    insert(from, a, b);
    insert(to, b, a);
  }

  console.log(from)
  console.log(to)

  // Queue: cities to visit
  const queue = [0], visited = new Set();
  let count = 0;

  while(queue.length) {
    const cur = queue.shift(); // First element in queue

    // Check values in first map
    if (from.has(cur)) {
      for (const x of from.get(cur)){
        // If visited, do nothing else add to queue
        if (visited.has(x)) continue;
        queue.push(x);
        count++; // Change direction of this path
      }
    }

    if (to.has(cur)) {
      // If visited, do nothing else add to queue
      for (const x of to.get(cur)){
        if (visited.has(x)) continue;
        queue.push(x);
      }
    }

    visited.add(cur); // Mark city as visited
  }
};

minReorder(6, [[0,1],[1,3],[2,3],[4,0],[4,5]])
