/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.has(complement)) {
      // If it exists, return the indices of the complement and the current number
      return [map.get(complement), i];
    }

    // If the complement doesn't exist, add the current number and its index to the map
    map.set(nums[i], i);
  }

  // If no solution is found, return an empty array (though the problem guarantees one solution)
  return [];
};

twoSum([1,3,8,2,12], 20)
