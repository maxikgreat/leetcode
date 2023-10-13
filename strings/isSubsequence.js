/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let j = 0

  console.log([8,6,2,5,4,8,3,7].reduce((acc, item) => acc += item, 0))

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++
    }
  }

  return s.length === j + 1
};

console.log(isSubsequence('abc', 'ahbgdc'))
