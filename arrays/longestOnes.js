/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  let onesLeft = k, start = 0, end = 0, count = 0, max = 0

  while (end < nums.length) {
    if (nums[end] === 1) {
      end++
      count++
      continue
    }

    if (nums[end] === 0 && onesLeft > 0) {
      count++
      onesLeft--
      end++
      continue
    }

    if (nums[end] === 0 && onesLeft === 0) {
      max = count
      start++
      count = 0
      end = start
      onesLeft = k
    }
  }


};

console.log(longestOnes([0,0,0,1], 4))
