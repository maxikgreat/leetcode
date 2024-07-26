/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, false)
  }
  let longest = 0

  map.forEach((_, num) => {
    if (map.get(num)) {
      return
    }
    if (map.has(num - 1)) {
      return
    }
    let current = 1
    let currentNum = num

    while (map.has(currentNum + 1)) {
      map.set(currentNum + 1, true)
      currentNum++
      current++
    }

    longest = Math.max(longest, current)
  })

  console.log(longest)
  return longest
};

longestConsecutive([100,4,200,1,3,2])
