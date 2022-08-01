function sumFromString(str){
    let arr = str.match(/\d+/g)
    return arr === null ? 0 : arr.map(Number).reduce((a,b) => a + b)
  }