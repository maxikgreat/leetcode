/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

  for (let i = nums.length - 1; i >= 0; i--) {

    if (nums[i] > nums[i - 1]) {
      for (let j = nums.length - 1; j >= i - 1; j--) {
        if (nums[j] > nums[i - 1]) {
          const temp = nums[i - 1]
          nums[i - 1] = nums[j]
          nums[j] = temp
        }
      }
    }
  }
};

nextPermutation([1,1,5])
