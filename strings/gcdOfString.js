var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const maxDivider = gcd(str1.length, str2.length)

  let dividerString = str1.substring(0, maxDivider)

  const longString = str1.length > str2.length ? str1 : str2
  const shortString = str1.length > str2.length ? str2 : str1

  while (dividerString.length) {
    if (!str1.includes(dividerString) || !str2.includes(dividerString)) {
      return ''
    }

    const regex = new RegExp(dividerString, 'g')
    const longMatches = longString.match(regex)
    const shortMatches = shortString.match(regex)
    if (longMatches.join('') === longString && shortMatches.join('') === shortString) {
      return dividerString
    }

    dividerString = dividerString.substring(0, dividerString.length - 1)
  }

  return ''
};


console.log(gcdOfStrings('AAAAAAAAA', 'AAACCC'))
