/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let charsToDelete = 0
  const chars = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '*') {
      charsToDelete++
      continue;
    }

    if (charsToDelete > 0) {
      charsToDelete--
      continue
    }

    chars.push(s[i])
  }

  return chars.reverse().join('')
};

console.log(removeStars("leet**cod*e"))
