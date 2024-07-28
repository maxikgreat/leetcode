/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
      "I"             :1,
      "V"             :5,
      "X"             :10,
      "L"             :50,
      "C"             :100,
      "D"             :500,
      "M"             :1000,
    }

    const conditions = {
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900
    }

    let res = 0

  if (!s) {
    return res
  }

    for (let i = 0; i < s.length; i++) {
      if (conditions[s[i] + s[i + 1]]) {
        res += conditions[s[i] + s[i + 1]]
        i++
      } else {
        res += map[s[i]]
      }
    }

    return res
};

console.log(romanToInt("MMMXLV"))
