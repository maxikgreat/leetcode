/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let max = 0

  for (let i = 0; i < k; i++) {
    max += nums[i]
  }

  let currentMax = max

  for (let i = k; i < nums.length; i++) {
    currentMax = currentMax - nums[i - k] + nums[i]

    if (currentMax > max) {
      max = currentMax
    }
  }

  return max
};

findMaxAverage([1,12,-5,-6,50,3], 4)
