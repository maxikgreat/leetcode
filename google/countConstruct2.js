const countConstruct2 = (words, str) => {
  const arr = new Array(str.length + 1).fill(0)
  arr[0] = 1

  for (let i = 0; i < str.length; i++) {
    if (arr[i] === null) {
      continue
    }

    const nextStr = str.substring(i)
    for (const word of words) {
      if (nextStr.startsWith(word) && i + word.length <= str.length) {
        arr[i + word.length] += arr[i]
      }
    }
  }

  return arr[str.length]
}

console.log(countConstruct2(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef'))
console.log(countConstruct2(['purp', 'p', 'ur', 'le', 'purpl'], 'purple'))
