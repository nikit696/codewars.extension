function strCount(str, letter){  
  let n = 0
  for (let i = 0; i < str.length; i++){
    if (str[i] == letter){
      n++
    }
  }
   return n
  }
  