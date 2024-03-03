function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return (...args2) => {
      return curried.apply(this, args.concat(args2))
    }
  }
}
const curried = curry(function (foo, bar) {
  console.log('this is', this.base)
  return this.base * foo + bar
})

const obj = { base: 5, mul: curried };

obj.mul()
const log = obj.mul(3)(2)
console.log(log)
