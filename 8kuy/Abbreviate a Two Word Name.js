function abbrevName(name){
    name.split();
    let string = name[0];
    let string1 = string.toUpperCase()
    string1 += "."
    for (let i = 0; i < name.length; i++){
      if (name[i] === " "){
        string1 += name[i + 1].toUpperCase();
      }
    }
    return string1;  // code away
  
  }