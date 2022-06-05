function count(array){
    return array.reduce((acc,curr) =>{
      acc[curr] === undefined ? acc[curr] = 1 : acc[curr]++
      return acc
    }, {})
  }