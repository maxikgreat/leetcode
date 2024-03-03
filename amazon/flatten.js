/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value, res = []) {
  for (const item of value) {
    if (Array.isArray(item)) {
      flatten(item, res)
    } else {
      res.push(item)
    }
  }

  return res
}

console.log(flatten([1, [2]]))
