function throttle(func, delay) {
  let allowed = true
  return function (...args) {
    if (allowed) {
      func.bind(this)(...args)
      allowed = false
      setTimeout(() => {
        allowed = true
      }, delay)
    }
  }
}

const obj = {
  test: '1',
  show: () => {
    console.log(this)
  }
}

const throttled = throttle(obj.show.bind(obj), 1000)

// throttled()

obj.show()
