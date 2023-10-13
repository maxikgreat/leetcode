function sortedSquares(nums)  {
  const result = []
  let i = 0, j = nums.length - 1, iterator = nums.length - 1;

  while (i !== j) {
    const leftNumber = Math.pow(nums[i], 2)
    const rightNumber = Math.pow(nums[j], 2)

    if (leftNumber > rightNumber) {
      result[iterator] = leftNumber;
      i++
    } else {
      result[iterator] = rightNumber;
      j--
    }
    iterator--;
  }

  result[iterator] = nums[i]

  return result
}

console.log(sortedSquares([-5, -3, -1, 0, 2, 3, 6, 8, 16]))
