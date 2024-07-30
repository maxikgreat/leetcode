const fib = (n) => {
  const sequence = Array.from({length: n + 1}).fill(0)
  sequence[1] = 1

  for (let i = 0; i < n; i++) {
    sequence[i + 1] += sequence[i]
    sequence[i + 2] += sequence[i]
  }

  return sequence[n]
}

console.log(fib(7))
