/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = nums.length - 1
  let offset = 0

  for (let i = 0; i < nums.length - offset; i++) {
    if (nums[i] === 0) {
      const temp = nums[j]
      nums[j] = 0
      nums[i] = temp
      j--
      offset++
    }
  }

  return nums
};

console.log(moveZeroes([0,1,0,3,12]))
