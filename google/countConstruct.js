
const countConstruct = (words, str, memo = {}) => {
  if (str in memo) {return memo[str]}
  if (str === '') {return 1}

  let res = 0
  for (const word of words) {
    if (str.startsWith(word)) {
      const nextWord = str.substring(str.indexOf(word) + word.length)
      memo[str] = countConstruct(words, nextWord)
      res += memo[str]
    }
  }
  memo[str] = res
  return res
}

console.log(countConstruct(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef'))
