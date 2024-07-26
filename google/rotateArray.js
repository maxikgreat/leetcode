/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length
  if (k === 0) {
    return
  }

  // nums.concat(nums.splice(nums.length - 1 - k, k), nums)
  const last = nums.slice(nums.length - k, nums.length)
  const first= nums.slice(0, nums.length - k)
  nums.splice(0, nums.length, ...last, ...first)
};

rotate([1, 2], 5)
