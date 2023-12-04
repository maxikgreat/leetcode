/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  let senators = [...senate]

  while (senators.length) {
    const senator = senators.shift()

    if (senator === null) {
      continue
    }

    if (senator === 'R') {
      if (senators.includes('D')) {
        const banSenatorIndex = senators.indexOf('D')
        senators[banSenatorIndex] = null

        if (senators.length === 0) {
          return senator === 'R' ? 'Radiant' : 'Dire'
        }

        senators.push(senator)
        continue
      } else {
        return 'Radiant'
      }
    }

    if (senator === 'D') {
      if (senators.includes('R')) {
        const banSenatorIndex = senators.indexOf('R')
        senators[banSenatorIndex] = null

        if (senators.length === 0) {
          return senator === 'R' ? 'Radiant' : 'Dire'
        }

        senators.push(senator)
      } else {
        return 'Dire'
      }
    }

  }
};

console.log(predictPartyVictory('DDRRR'))
