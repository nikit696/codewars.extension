function numbers(){
    let array = [...arguments]
    return array.every(e => typeof e == "number")  
  }
  // Create your numbers function here