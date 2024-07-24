/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
function listFormat(items, options = {}) {
  let raw = items
  let rest

  if (options.unique) {
    raw = [...new Set(items)]
  }

  if (options.sorted) {
    raw = raw.sort()
  }

  if (typeof options.length !== 'undefined') {
    raw = raw.slice(0, options.length)
    if (items.length >= options.length) {
      rest = items.length - options.length
    }
  }

  raw = raw.filter(Boolean)

  if (raw.length < 3) {
    return raw.join(' and ')
  }

  if (options.length) {
    return `${raw.join(', ')} and ${rest} ${rest > 1 ? 'others' : 'other'}`
  }

  const last = raw.pop()

  return `${raw.join(', ')} and ${last}`
}

const res = listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 3 })
console.log(res)
