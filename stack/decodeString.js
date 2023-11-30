/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let i = 0
  const stack = []
  let readyToMultiply = false
  while (i < s.length) {
    if (s[i] !== ']') {
      stack.push(s[i])
    } else {
      let str = ''
      let number = ''
      while (true) {
        if (readyToMultiply) {
          readyToMultiply = false
          stack.push(Array.from({length: number}).map(() => str).join(''))
          break
        }
        const poped = stack.pop()
        if (poped === '[') {
          while (true) {
            const popedNumber = stack.pop()

            if (/[0-9]/.test(popedNumber)) {
              number = `${popedNumber}${number}`
            } else {
              if (typeof popedNumber !== 'undefined') {
                stack.push(popedNumber)
              }

              number = Number(number)
              readyToMultiply = true
              break
            }
          }
        } else {
          str = `${poped}${str}`
        }
      }
    }
    i++
  }

  return stack.join('')
};



console.log(decodeString('4[ab6[cd]]'))
// console.log(decodeString('3[a]2[bc]'))
