function squares(x, n) {
    let array = []
    for (let i = 1; i <= n; i++){
      i === 1 ? array.push(x) : array.push(array[array.length - 1]**2)
    }
    return array
  }