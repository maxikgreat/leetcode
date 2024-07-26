/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0
  }

  let k = 2
  let res = -1

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      res++
      nums[k] = nums[i]
      k++
    }
  }

  console.log(nums)
  return k
};

removeDuplicates([0,0,1,1,1,1,2,3,3])
