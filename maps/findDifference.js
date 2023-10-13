/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const difference1 = []
  const difference2 = []

  const map1 = nums1.reduce((acc, num) => {
    return {
      ...acc,
      [String(num)]: true
    }
  }, {})

  const map2 = nums2.reduce((acc, num) => {
    return {
      ...acc,
      [String(num)]: true
    }
  }, {})

  Object.keys(map1).forEach(num => {
    if (!map2[num]) {
      difference1.push(Number(num))
    }
  })

  Object.keys(map2).forEach(num => {
    if (!map1[num]) {
      difference2.push(Number(num))
    }
  })

  return [difference1, difference2]
};

findDifference([1, 2, 3], [2, 4, 6])
