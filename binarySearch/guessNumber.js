/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var guess = function(num, values) {
  const index = Math.floor(values.length / 2)
  const middleNum = values[index]
  if (num === middleNum) {
    return num
  }

  if (num > middleNum) {
    return guess(num, values.filter((value) => value > middleNum))
  }

  if (num < middleNum) {
    return guess(num, values.filter((value) => value < middleNum))
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, num) {
  const values = Array.from({length: n}).map((_, index) => index + 1)
  return guess(num, values)
};

guessNumber(10, 7)
