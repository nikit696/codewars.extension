function reverse(str){
    if (str === ""){ 
      return str
  }
      str = str.trim().split(" ")
    
    return str.map((item, index) => index % 2 === 1 ? item.split("").reverse().join("") : item).join(" ")
  }
  //
  //
  //
  //
  //
  function reverse(str){
    str = str.trim().split(" ")
    return str.map((item, index) => index % 2 === 1 ? item.split("").reverse().join("") : item).join(" ")
  }