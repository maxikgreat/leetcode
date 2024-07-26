/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xStr = String(x)

  const yStr = xStr.split('').reverse().join('')

  return xStr === yStr
};
