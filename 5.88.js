function fiveLine(s){
    s = s.trim()
    let string = s
    for (let i = 2; i <= 5; i++){
      string = string + "\n" + s.repeat(i)
    }
    return string 
  }