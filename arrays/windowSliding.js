const windowSliding = (nums, k) => {
  let maxSum = 0

  for (let i = 0; i < k; i++) {
    maxSum += nums[i]
  }

  let windowSum = maxSum
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, windowSum);
  }
}

windowSliding([1, 2, 3, 10, 1, 2, 3, 20, 1, 2, 3, 8], 3)
