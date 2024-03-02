/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
function get(objectParam, pathParam, defaultValue) {
  const props = Array.isArray(pathParam)  ? pathParam : pathParam.split('.')
  let object = objectParam

  while (props.length) {
    const prop = props.shift()
    if (typeof object === 'undefined') {
      return defaultValue
    }
    object = object[prop]


  }

  return object ?? defaultValue
}

const res = get({ a: { b: true } }, 'a.b.c')

console.log('res is', res)
