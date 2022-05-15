function diamond(n){
    if (n % 2 === 0 || n < 0){
      return null
    }
    let str = "*".repeat(n) + "\n"
    for (let i = n - 2; i >= 1; i -= 2){
      str = " ".repeat((n - i) / 2) + "*".repeat(i) + "\n" + str + " ".repeat((n - i) / 2) + "*".repeat(i) + "\n"
    }
    return str
  }