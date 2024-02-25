
Array.prototype.myMap = function (callback) {
  const mapped = []
  for (const [element, index] of this.entries()) {
    mapped.push(callback(element, index, this))
  }
  return mapped
}

const arr = [1, 2, 3].myMap((element, index) => {
  return element * index
})

Array.prototype.myFilter = function (callback) {
  const filtered = []

  for (let i = 0; i < this.length; i++) {
    const passed = callback(this[i], i, this)
    if (passed) {
      filtered.push(this[i])
    }
  }
  return filtered
}

const filtered = [1, 2, 3, 10].myFilter((el, index) => {
  return el > 9
})

Array.prototype.myReduce = function (callback, initValue) {
  let prev = initValue

  for (let i = 0; i < this.length; i++) {
    if (i === 0 && typeof prev === 'undefined') {
      prev = this[i]
      continue
    }
    prev = callback(prev, this[i], i, this)
  }

  return prev
}

const reducable = [1, 2, 3, 4].myReduce((prev, current) => {
  return {
    ...prev,
    [current]: current
  }
}, {})

const sort = [10, 5, 50, 1, 20, 12, 100, 18, 31].sort((left, right) =>{
  // console.log('left', left)
  // console.log('right', right)

  return left>  right ? 1 : -1
})

console.log('sort', sort)


Array.prototype.mySort = function (callback) {
  if (this.length < 2) {
    return this
  }
  const merge = (left, right) => {
    let i = 0, j = 0
    const merged = []
    while (i < left.length && j < right.length) {
      if (callback(left[i], right[j]) <= 0) {
        merged.push(left[i])
        i++
      } else {
        merged.push(right[j])
        j++
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
  const sorted = divide(this)
  return sorted
}

const sortMy = [10, 5, 50, 1, 20, 12, 100, 18, 31].mySort((left, right) =>{
  return left > right ? 1 : -1
})

console.log('sortMy', sortMy)
