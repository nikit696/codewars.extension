function findLongest(array){
    array = array.map(String)
    return array.reduce((acc,curr) =>{
      return curr.length > acc.length ? curr : acc
    }, "") - 0
  }