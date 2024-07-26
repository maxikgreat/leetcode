const calcCross = (nums, left, mid, right) => {
  let leftSum = Number.NEGATIVE_INFINITY
  let rightSum = Number.NEGATIVE_INFINITY
  let sum = 0

  for (let i = mid; i >= left; i--) {
    sum += nums[i]
    if (sum > leftSum) {
      leftSum = sum
    }
  }



  sum = 0
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i]
    if (sum > rightSum) {
      rightSum = sum
    }
  }

  return leftSum + rightSum
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  const calc = (array, left, right) => {
    if (left === right) {
      return array[left]
    }

    const mid = Math.floor((left + right) / 2)

    const leftSum = calc(array, left, mid)
    const rightSum = calc(array, mid + 1, right)
    const crossSum = calcCross(array, left, mid, right)

    return Math.max(leftSum, rightSum, crossSum)
  }

  return calc(nums, 0, nums.length - 1)
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
