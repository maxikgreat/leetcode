/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  if (asteroids.length < 2) {
    return asteroids
  }

  const notCollidingAsteroids = [asteroids[0]]

  for (let i = 1; i < asteroids.length; i++) {
    const left = notCollidingAsteroids[notCollidingAsteroids.length - 1]
    const right = asteroids[i]

    const collision = left + right

    if (!(left < 0 && right > 0) && collision === 0) {
      notCollidingAsteroids.pop()
      continue
    }

    if (collision < left && collision > right) {
      if (Math.abs(left) > Math.abs(right)) {
        continue
      } else {
        notCollidingAsteroids.pop()
      }
      i = Math.max(0, i - 1)
      continue
    }

    notCollidingAsteroids.push(right)
  }

  return notCollidingAsteroids
};


console.log(asteroidCollision([-2,-1,1,2]))


