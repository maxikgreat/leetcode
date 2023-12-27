/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var guess = function(num) {
  if (num === 1) {
    return 0
  }

  if (num > 1) {
    return -1
  }

  return 1
}
var recursive = function(values) {
  const index = Math.floor(values.length / 2)
  const middleNum = values[index]

  if (guess(middleNum) === 0) {
    return middleNum
  }

  if (guess(middleNum) === 1) {
    return recursive(values.filter((value) => value > middleNum))
  }

  if (guess(middleNum) === -1) {
    return recursive(values.filter((value) => value < middleNum))
  }
}

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  const values = Array.from({length: n}).map((_, index) => index + 1)
  return recursive(values)
};

guessNumber(2 )
