/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  console.log(s.trim().split(' '))
  return s.trim().split(' ').filter(str => str !== '').reverse().join(' ')
};

console.log(reverseWords("a good  example"))
