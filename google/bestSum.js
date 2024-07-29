const bestSum = (nums, target, memo = {}) => {
  let shortest = null
  if (target in memo) {
    return memo[target]
  }

  if (target === 0) {
    return []
  }

  if (target < 0) {
    return null
  }

  for (const num of nums) {
    const nextTarget = target - num
    const res = bestSum(nums, nextTarget, memo)
    if (res) {
      const resArr = [...res, num]
      if (shortest === null || resArr.length < shortest.length) {
        shortest = resArr
      }
    }
  }

  console.log(memo)
  memo[target] = shortest
  return shortest
}

console.log(bestSum([1, 2, 3], 7))
