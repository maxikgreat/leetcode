/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var res = 0;
  console.log(342 ^ 324)
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    const num = nums[i]
    console.log(num)
    res = res ^ num
  }
  return res;
};

singleNumber([4,1,2,3, 3,6, 7, 12, 1445, 6, 12, 1445, 7, 1,2])
