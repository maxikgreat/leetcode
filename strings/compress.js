/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let counter = 1
  let j = 0

  if (chars.length < 2) {
    return chars.length
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      counter++
      continue
    }

    if (counter < 2) {
      if (i === chars.length - 1) {
        chars[j] = chars[i]
        break
      }
      j++
      continue
    }

    // put quantity in chars
    chars[j] = chars[i]
    j++
    String(counter).split('').forEach(digit => {
      chars[j] = digit
      j++
    })
    counter = 1
  }

  chars.length = j + 1

  console.log(chars)
};

console.log(compress(["a","a","a","a","b","a"]))
