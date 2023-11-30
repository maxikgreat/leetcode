/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  if (asteroids.length < 2) {
    return asteroids
  }

  let i = 0

  while (i < asteroids.length) {
    const left = asteroids[i]
    const right = asteroids[i + 1]

    if (typeof left === 'undefined' || typeof right === 'undefined') {
      return asteroids
    }

    const collision = left + right

    if (left < 0 && right > 0) {
      i++
      continue
    }

    if (collision > left && collision > right) {
      i++
      continue
    }

    if (collision === 0) {
      asteroids[i] = null
      asteroids[i + 1] = null
      asteroids = asteroids.filter(Boolean)
      i = Math.max(0, i - 1)
      continue
    }

    if (collision < left && collision > right) {
      if (Math.abs(left) > Math.abs(right)) {
        asteroids[i + 1] = null
      } else {
        asteroids[i] = null
      }
      asteroids = asteroids.filter(Boolean)
      i = Math.max(0, i - 1)
      continue
    }

    i++
  }

  return asteroids
};



