const getFrequency = (word) => {
  const array = new Array(26).fill(0)

  for (let i = 0; i < word.length; i++) {
    const index = word.charCodeAt(i) - 'a'.charCodeAt(0)
    array[index]++
  }

  return array
}

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1 === word2) {
    return true
  }

  if (word1.length !== word2.length) {
    return false
  }

  const frequency1 = getFrequency(word1)
  const frequency2 = getFrequency(word2)

  for (let i = 0; i < word1.length; i++) {
    if (frequency1[i] && !frequency2[i] || !frequency1[i] && frequency2[i]) {
      return false
    }
  }

  frequency1.sort((a, b) => b - a)
  frequency2.sort((a, b) => b - a)

  for (let i = 0; i < word1.length; i++) {
    if (frequency1[i] === word1.length || frequency2[i] === word1.length) {
      return false
    }

    if (frequency1[i] !== frequency2[i]) {
      return false
    }
  }
  console.log(frequency1)

  return true
};

console.log(closeStrings('aaacbb', 'bbbcaa'))
