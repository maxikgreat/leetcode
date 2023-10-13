/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    if (i === length - 1 && arr[i] === 0) {
      break
    }
    if (arr[i] === 0) {
      for (let j = length - 1; j > i + 1; j--) {
        arr[j] = arr[j - 1]
      }
      arr[i + 1] = 0
      i++
    }
  }

  console.log(arr)
}

duplicateZeros([0,0,0,0, 0,0,0])
