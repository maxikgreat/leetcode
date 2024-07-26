/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0
  }

  let k = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]
      k++
    }
  }

  return k
}

removeDuplicates([0, 1, 1, 2,2,2,3,4,5])
