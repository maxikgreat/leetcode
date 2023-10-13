const removeItem = (array, index) => {
  for (let i = index + 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }

  array.length--
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let maxOps = 0
  nums.sort((left, right) => left - right)

  let i = 0;
  let j = nums.length - 1

  while (nums[j] >= k) {
    j--
  }

  while (i < j) {
    const tempSum = nums[i] + nums[j]
    if (tempSum === k) {
      maxOps++
      i++
      j--
      continue
    }

    if (tempSum < k) {
      i++
    } else {
      j--
    }
  }

  return maxOps
};

console.log(maxOperations([2, 2, 2, 3, 1, 1, 4, 1], 4))
