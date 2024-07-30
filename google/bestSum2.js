const bestSum2 = (nums, target) => {
  const arr = new Array(target + 1).fill(null)
  arr[0] = []
  let shortest = null

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue
    }
    for (const num of nums) {
      if (i + num <= arr.length - 1) {
        const combination = arr[i] === null ? [num] : [...arr[i], num]
        if (arr[i + num] === null || combination.length < arr[i + num].length)
        arr[i + num] = combination
      }
    }
  }

  console.log(shortest)
  return arr[target]
}

console.log(bestSum2([3, 2], 6))
