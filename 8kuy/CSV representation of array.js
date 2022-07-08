function toCsvText(array) {
    return array.reduce((acc,curr,index) =>{
      return index !== array.length - 1 ? acc + `${curr.join(",")}\n` : acc + curr.join(",")
    }, "")
 }