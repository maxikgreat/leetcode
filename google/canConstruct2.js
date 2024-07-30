const canConstruct = (words, str) => {
  const arr = new Array(str.length + 1).fill(false)
  arr[0] = true
  let compareStr = str

  for (let i = 0; i < arr.length; i++) {

    if (!arr[i]) {
      continue
    }

    compareStr = str.substring(i)

    for (const word of words) {
      if (compareStr.startsWith(word)) {
        if (i + word.length <= str.length)
          arr[i + word.length] = true
      }
    }
  }

  return arr[str.length]
}

console.log(canConstruct(["ab", "abc", "cd", "def", "abcd"], "abcdef"))
