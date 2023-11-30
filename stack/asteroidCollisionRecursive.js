/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollisionRecursive = function(asteroids, i = 0) {
  if (asteroids.length < 2 || typeof asteroids[i] === 'undefined') {
    return asteroids
  }

  const left = asteroids[i]
  const right = asteroids[i + 1]

  if (left < 0 && right > 0) {
    return asteroidCollisionRecursive(asteroids, i + 1)
  }

  const collision = left + right

  if (collision === 0) {
    const newAsteroids = asteroids.map((asteroid, index) => index !== i && index !== i+1 ? asteroid : null).filter(Boolean)
    return asteroidCollisionRecursive(newAsteroids)
  }

  if (collision > left && collision > right) {
    return asteroidCollisionRecursive(asteroids, i + 1)
  }

  if (collision < left && collision > right) {
    if (Math.abs(left) > Math.abs(right)) {
      const newAsteroids = asteroids.map((asteroid, index) => index !== i + 1 ? asteroid : null).filter(Boolean)
      return asteroidCollisionRecursive(newAsteroids, Math.max(0, i - 1))
    } else {
      const newAsteroids = asteroids.map((asteroid, index) => index !== i ? asteroid : null).filter(Boolean)
      return asteroidCollisionRecursive(newAsteroids, Math.max(0, i - 1))
    }
  }

  return asteroidCollisionRecursive(asteroids, i + 1)
};


console.log(asteroidCollisionRecursive([10,2,-5]))
