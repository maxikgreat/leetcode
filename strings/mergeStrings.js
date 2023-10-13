/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let i = 0, j = 0
  let word3 = ''

  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      word3 += word1[i]
      i++
    }

    if (j < word2.length) {
      word3 += word2[j]
      j++
    }
  }

  return word3
};

mergeAlternately('abc', 'xyz')
