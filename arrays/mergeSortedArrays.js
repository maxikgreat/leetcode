/**
 * @param {number[]} nums1
 * @param {number} length1
 * @param {number[]} nums2
 * @param {number} length2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, length1, nums2, length2) {
  const maxLength = length1 + length2
  let iterator1 = length1 - 1
  let iterator2 = length2 - 1
  let totalIterator = maxLength - 1

  while (iterator1 >= 0 && iterator2 >= 0) {
    if (nums1[iterator1] > nums2[iterator2]) {
      nums1[totalIterator] = nums1[iterator1]
      iterator1--
    } else {
      nums1[totalIterator] = nums2[iterator2]
      iterator2--
    }

    totalIterator--
  }

  while (iterator1 >= 0) {
    nums1[totalIterator] = nums1[iterator1]
    iterator1--;
    totalIterator--;
  }

  while (iterator2 >= 0) {
    nums1[totalIterator] = nums2[iterator2]
    iterator2--;
    totalIterator--;
  }

  console.log(nums1)
};

merge([1, 2, 3], 3, [1], 1)
