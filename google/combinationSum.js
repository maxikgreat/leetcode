/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const arr = new Array(target + 1).fill().map(() => [])
  arr[0] = [[]]

  for (let i = 0; i < target; i++) {
    if (arr[i].length === 0) {
      continue
    }

    for (const candidate of candidates) {
      if (i + candidate <= target) {
        arr[i].forEach(item => {
          if (item.length === 0 || candidate >= item[item.length - 1]) {
            arr[i + candidate].push([...item, candidate]);
          }
        });
      }
    }
  }


  return arr[target]
};

console.log(combinationSum([2,3,6,7], 7))
