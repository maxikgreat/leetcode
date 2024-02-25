function debounce(func, timeout) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), timeout)
  }
}


function test() {
  let i = 0

  return () => {
    console.log(i)
    i++
  }
}

const show = (value = 1, value2 = 'dwa') => {
  console.log('show me', value, value2)
}

// const debounced = debounce(show, 1000)
// debounced(3, 4)
// debounced(5, 6)
// debounced(10, 12)
// debounced(20, 30)

const bla = test()

bla()
bla()
