const howSum2 = (nums, target) => {
  const arr = new Array(target + 1).fill(null)
  arr[0] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue
    }
    for (const num of nums) {
      if (i + num <= arr.length - 1) {
        arr[i + num] = arr[i] === null ? [num] : [...arr[i], num]
      }
    }
  }

  return arr[target]
}

console.log(howSum2([3, 4, 5], 7))
