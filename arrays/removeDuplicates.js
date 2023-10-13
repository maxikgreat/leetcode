/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let insertIndex = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[insertIndex++] = nums[i]
    }
  }
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
