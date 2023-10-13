/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  // const minArray = []
  // const maxArray = []
  // let i = 0
  //
  // for (; i < nums.length; i++) {
  //   if (i === 0) {
  //     minArray[i] = nums[i]
  //     continue
  //   }
  //
  //   minArray[i] = Math.min(nums[i], minArray[i - 1])
  // }
  //
  // i--
  //
  // for (; i >= 0; i--) {
  //   if (i === nums.length - 1) {
  //     maxArray[i] = nums[i]
  //     continue
  //   }
  //
  //   maxArray[i] = Math.max(nums[i], maxArray[i + 1])
  // }
  //
  // i++
  //
  // for (; i < nums.length; i++) {
  //   if (minArray[i] < nums[i] && nums[i] < maxArray[i]) {
  //     return true
  //   }
  // }
  //
  // return false

  let first = Number.MAX_SAFE_INTEGER, second = Number.MAX_SAFE_INTEGER

  for (const num of nums) {
    if (num <= first) {
      first = num
    } else if (num <= second) {
      second = num
    } else {
      return true
    }
  }

  return false
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]))
