const canSum = (nums, target) => {
  const traverse = (nums, target, memo = {}) => {
    console.log('target', target)
    if (target in memo) {
      return memo[target]
    }
    if (target === 0) {
      return true
    }

    if (target < 0) {
      return false
    }

    for (let i = 0; i < nums.length; i++) {
      const nextTarget = target - nums[i]
      if (nextTarget < 0) {
        continue
      }
      if (traverse(nums, nextTarget, memo)) {
        memo[target] = true
        return true
      }
    }

    memo[target] = false
    return false
  }

  return traverse(nums, target)
}

console.log(canSum([2, 3, 4], 8))
