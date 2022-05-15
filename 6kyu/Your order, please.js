function order(words){
    if (words.length === 0){
      return ""
    }
    words = words.split(" ")
    let str = ""
    for (let i = 1; i <= words.length; i++){
      for (let k = 1; k <= words.length; k++){
        if(words[k - 1].includes(String(i))){
          str  = str + " " + words[k - 1]
        }
      }
    }
    return str.trim()
  }