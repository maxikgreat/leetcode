/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const leftMax = []
  const rightMax = []
  const trapped = []
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1] ?? 0)
  }

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1] ?? 0)
  }

  for (let i = 0; i < height.length; i++) {
    trapped[i] = Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  console.log(leftMax)
  console.log(rightMax)
  console.log(trapped)

  return trapped.reduce((acc, item) => acc + item)
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])
