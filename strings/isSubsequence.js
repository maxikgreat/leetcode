/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let j = 0

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++
    }
  }

  return s.length === j
};

console.log(isSubsequence('abce', '324234abc324234'))
