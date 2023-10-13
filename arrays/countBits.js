/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const bits = []
  for (let i = 0; i <= n; i++) {
    let number = i
    let oneBits = 0
    while (number > 0) {
      if (number % 2 !== 0) {
        if (bits[i]) {
          bits[i]++
        } else {
          bits[i] = 1
        }
      }

      number = Math.floor(number / 2)
    }

    if (!bits[i]) {
      bits[i] = 0
    }
  }

  return bits
};

console.log(countBits(2))
