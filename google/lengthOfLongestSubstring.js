/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length
  }
  const map = new Map()
  let longest = 0
  let res = ''
  let left = 0

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left)
    }
    map.set(s[right], right)
    res = s.substring(left, right + 1)

    if (res.length > longest) {
      longest = res.length
    }
  }

  return res.length
};

lengthOfLongestSubstring("abba")
