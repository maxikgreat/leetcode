function promiseAll(values) {
  return new Promise((resolve, reject) => {
    if (values.length === 0) {
      return resolve([])
    }

    const result = []

    values.forEach((item, i) => {
      Promise.resolve(item).then(val => {
        result.push(val)
        if (values.length === i) {
          resolve(result)
        }
      }).catch(reject)
    })
  })
}
