const canConstruct = (words, str, memo = {}) => {
  if (str in memo) return memo[str]
  if (str === '') {
    return true
  }

  for (const word of words) {
    if (str.startsWith(word)) {
      const substr = str.substring(str.indexOf(word) + word.length)
      if (canConstruct(words, substr, memo)) {
        memo[str] = true
        return true
      }
    }
  }

  memo[str] = false
  return false
}

console.log(canConstruct(["ab", "abc", "cd", "def", "abcd"], "abcdef"))
