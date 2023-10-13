/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = nums.length - 1, j = nums.length - 1;
  for (; i >= 0; i--) {
    if (nums[i] === val) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j--
    }
  }
  nums.length = nums.length - j + 1
  return nums.length - j + 1
};

console.log(removeElement([3, 1, 1, 3, 2, 10, 4, 3, 1, 3], 3))
