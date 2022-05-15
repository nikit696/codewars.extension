// output: case-agnostic sort
sortme = function( names ){
    let arr = names.sort((a, b)=>{
      for (let i = 0; i < Math.min(a.length, b.length); i++){
        let firstLetter = a[i].toLowerCase()
        let secondLetter = b[i].toLowerCase()
        if (firstLetter.charCodeAt(0) - secondLetter.charCodeAt(0) !== 0){
          return firstLetter.charCodeAt(0) - secondLetter.charCodeAt(0)
          }
    }
      return a.length - b.length
      })
    return arr
  }
  