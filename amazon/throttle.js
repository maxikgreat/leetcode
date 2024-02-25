function throttle(func, delay) {
  let allowed = true
  return function (...args) {
    if (allowed) {
      func(...args)
      allowed = false
      setTimeout(() => {
        allowed = true
      }, delay)
    }
  }
}

const show = (val, val2) => {
  console.log('show', val, val2)
}

const throttled = throttle(show, 1000)
//
for (let i = 0; i < 1000; i++) {
  throttled(1, 2)
}
