function alienLanguage(str){
    str = str.toUpperCase().split(" ")
    for (let i = 0; i < str.length; i++){
      str[i] = str[i].slice(0, str[i].length - 1) + str[i].slice(-1).toLowerCase()
    }
   return str.join(" ") 
  }