const howSum = (nums, target, memo = {}) => {
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
    const res = howSum(nums, nextTarget, memo)
    if (res) {
      memo[target] = [...res, num]
      return memo[target]
    }
  }

  memo[target] = null
  return null
}

console.log(howSum([5, 5, 2], 6))
