function getLargerNumbers(a, b) {
    return a.map((curr,index) =>{
      return a[index] >= b[index] ? a[index] : b[index]
    })
  }