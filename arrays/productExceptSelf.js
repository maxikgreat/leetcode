/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const left = []
  const right = []

  let i = 0
  let prevValue = 1

  for (; i < nums.length; i++) {
    if (i === 0) {
      prevValue = 1
      left[i] = prevValue
      continue
    }

    left[i] = nums[i - 1] * prevValue
    prevValue = left[i]
  }

  for (; i >= 0; i--) {
    if (i === nums.length - 1) {
      prevValue = 1
      right[i] = prevValue
      continue
    }

    right[i] = nums[i + 1] * prevValue
    prevValue = right[i]
  }

  return left.map((num, index) => num * right[index])
};

console.log(productExceptSelf([1, 2, 3, 4]))
