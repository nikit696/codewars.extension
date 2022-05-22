function count (string) {  
    return string.split("").reduce((acc, curr) =>{
      acc[curr] ? acc[curr]++ : acc[curr] = 1
      return acc
    }, {})
   }