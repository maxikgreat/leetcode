/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxSquare = Number.NEGATIVE_INFINITY

  while (left < right) {
    const leftBar = height[left]
    const rightBar = height[right]
    const width = right - left
    const barHeight = Math.min(leftBar, rightBar)

    const square = width * barHeight

    if (square > maxSquare) {
      maxSquare = square
    }

    if (leftBar < rightBar) {
      left++
    } else {
      right--
    }
  }

  console.log(maxSquare)
  return maxSquare
};


maxArea([1,8,6,2,5,4,8,3,7])
