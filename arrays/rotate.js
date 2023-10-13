/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let currentIndex = 0
  let currentValue, nextValue
  for (let i = 0; i < nums.length; i++) {
    if (!nextValue) {
      currentValue = nums[currentIndex]
    } else {
      currentValue = nextValue
    }

    if (currentIndex + k > nums.length - 1) {
      currentIndex = currentIndex + k - nums.length
    } else {
      currentIndex += k
    }
    nextValue = nums[currentIndex]
    nums[currentIndex] = currentValue
  }

  console.log(nums)
};

//
rotate([1, 2, 3, 4], 2)
//
