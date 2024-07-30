const canSum = (nums, target) => {
  const arr = new Array(target + 1).fill(false)
  arr[0] = true
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      continue
    }

    for (const num of nums) {
      if (i + num <= arr.length - 1) {
        arr[i + num] = true
      }
    }
  }

  return arr[target]
}

console.log(canSum([5, 3, 10], 7))
