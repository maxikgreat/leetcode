/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const graph = {}

  for (let i = 0; i < equations.length; i++) {

    let [numerator, denominator] = equations[i];

    let value = values[i];

    if (!graph[numerator]) {
      graph[numerator] = {};
    }

    if (!graph[denominator]) {
      graph[denominator] = {};
    }

    graph[numerator][denominator] = value;
    graph[denominator][numerator] = 1 / value;
  }

  console.log(graph)
};

calcEquation(
  [["a","b"],["b","c"]],
  [2,3],
  [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
)
