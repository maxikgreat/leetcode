/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j = height.length - 1

  let maxLeft = 0
  let maxRight = 0

  let maxSquare = 0

  while (i < j) {
    maxLeft = height[i]
    maxRight = height[j]
    const newMaxSquare =  Math.min(maxLeft, maxRight) * ((j + 1) - (i + 1))

    if (newMaxSquare > maxSquare) {
      maxSquare = newMaxSquare
    }

    if (maxLeft < maxRight) {
      i++
    } else {
      j--
    }
  }

  return maxSquare
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
