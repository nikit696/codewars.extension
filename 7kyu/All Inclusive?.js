function containAllRots(string, arr) {
    if(string.length === 0){
      return true
    }
    let string2  = string
    for (let i = 0; i < string.length; i++){
      string2 = string2.substring(string2.length - 1) + string2.substring(0,string2.length - 1) 
      if (arr.indexOf(string2) === -1){
        return false
      }
     }
    return true
  }