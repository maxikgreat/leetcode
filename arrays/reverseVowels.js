/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowelsArray = []

  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsArray.push(s[i])
    }
  }

  const vowelsReversedString = vowelsArray.reverse().join('')

  let newString = ''
  let vowelsCounter = 0

  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      newString += s[i]
    } else {
      newString += vowelsReversedString[vowelsCounter++]
    }
  }

  return newString
};

console.log(reverseVowels('hello'))
