/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let flowersToPlant = n;

  if (flowersToPlant === 0) {
    return true
  }

  if (flowerbed.length === 1) {
    if (flowerbed[0] === 1) {
      return false
    } else {
      flowersToPlant--
      return flowersToPlant === 0
    }
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowersToPlant === 0) {
      break;
    }

    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      flowersToPlant--
      continue
    }

    if (i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
      flowerbed[i] = 1
      flowersToPlant--
      continue
    }

    if (i !== flowerbed.length - 1 && i !== 0 && flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1
      flowersToPlant--
    }
  }

  return flowersToPlant > 0
};

console.log(canPlaceFlowers([0], 1))
