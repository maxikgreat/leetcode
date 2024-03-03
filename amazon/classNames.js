/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
function classNames(...args) {
  const names = []

  const traverse = (arg) => {
    if (typeof arg === 'boolean' || arg === null) {
      return
    }

    if (Array.isArray(arg)) {
      for (const arrayArg of arg) {
        traverse(arrayArg)
      }
    } else if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          traverse(key)
        }
      })
    } else {
      names.push(arg)
    }
  }

  for (let i = 0; i < args.length; i++) {
    traverse(args[i])
  }

  return names.join(' ')
}

console.log('res', classNames('boo', true && 'loo', false && 'booz', {
    foo: true,
    bar: false,
    baz: 1,
  }),
)
