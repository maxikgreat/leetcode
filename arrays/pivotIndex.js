/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let i = 0
  let left = 0
  let right = nums.reduce((acc, num, index) =>
      index === 0 ? acc : acc + num
    , 0)

  for (; i < nums.length - 1; i++) {
    if (left === right) {
      return i
    }

    left += nums[i]
    right -= nums[i + 1]
  }

  return left === right ? i : -1
};

pivotIndex([2,7,3,6,5,6])
