const fib = (n, memo = {}) => {
  if (n in memo) return memo[n]
  if (n === 0) return 0
  if (n === 1) return 1
  const res = fib(n - 2, memo) + fib(n - 1, memo)
  memo[n] = res
  return res
}

console.log(fib(50))
