function duplicates(array){
    let obj = array.reduce((acc, curr) =>{
      acc[curr] ? acc[curr]++ : acc[curr] = 1
      return acc
    }, {})
    let sum = 0
    for (let key in obj){
      sum += Math.floor(obj[key] / 2)
    }
    return sum
  }