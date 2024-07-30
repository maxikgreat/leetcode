const allConstruct = (words, str) => {
  if (str === '') return [[]]

  let result = []

  for (const word of words) {
    if (str.startsWith(word)) {
      const nextWord = str.substring(str.indexOf(word) + word.length)
      let res = allConstruct(words, nextWord)
      result.push(...res.map(item => [word, ...item]))
    }
  }

  return result
}

console.log(allConstruct(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef'))
console.log(allConstruct(['purp', 'p', 'ur', 'le', 'purpl'], 'purple'))
