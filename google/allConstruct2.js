const allConstruct2 = (words, str) => {
  const arr = new Array(str.length + 1).fill().map(() => Array.from({length: 0}))
  arr[0] = [[]]

  for (let i = 0; i < str.length; i++) {
    if (arr[i].length === 0) {
      continue
    }

    const nextStr = str.substring(i)
    for (const word of words) {
      if (nextStr.startsWith(word) && i + word.length <= str.length) {
        arr[i + word.length] =  [...arr[i + word.length], ...arr[i].map(item => [...item, word])]
      }
    }
  }

  return arr[str.length]
}

console.log(allConstruct2(['ab', 'abc', 'cd', 'def', 'abcd'], 'abcdef'))
console.log(allConstruct2(['purp', 'p', 'ur', 'le', 'purpl'], 'purple'))
