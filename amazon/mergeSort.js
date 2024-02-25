const asc = false
const merge = (left, right) => {
  let i = 0, j = 0
  const merged = []
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      merged.push(asc ? right[j] : left[i])
      asc ? j++ : i++
    } else {
      merged.push(asc ? left[i] : right[j])
      asc ? i++ : j++
    }
  }

  while (i < left.length) {
    merged.push(left[i])
    i++
  }

  while (j < right.length) {
    merged.push(right[j])
    j++
  }

  return merged
}

const divide = (array) => {
  if (array.length < 2) {
    return array
  }

  const left = array.slice(0, Math.ceil(array.length/2))
  const right = array.slice(Math.ceil(array.length/2))

  const dividedLeft = divide(left)
  const dividedRight = divide(right)

  return merge(dividedLeft, dividedRight)
}

const mergeSort = (array) => {
  const sorted = divide(array)
  console.log(sorted)
}


mergeSort([10, 5, 50, 1, 20, 12, 100, 18, 31])
