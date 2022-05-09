function strong(n) {
    let array = String(n).split("")
    let sum = 0
    for (let i = 0; i < array.length; i++){
      sum += factorial(+array[i])
    }
    function factorial(a){
        let fact = 1
        for (let i = 1; i <= a; i++){
          fact *= i
        }
      return fact
      }
    return n  === sum  ? "STRONG!!!!" : "Not Strong !!"
  }