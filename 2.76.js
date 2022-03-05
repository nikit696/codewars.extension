function lowercaseCount(str){
    let n = 0
    for (let i = 0; i < str.length; i++){
      if (/[a-z]/.test(str[i])){
        n++
      }
    }
  return n
}