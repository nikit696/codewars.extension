function spinWords(string){
    let arr = string.split(" ")
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length >= 5){
        arr[i] = arr[i].split("").reverse().join("")
      }
    }
    return arr.join(" ")
  }

  function spinWords(string){
    let arr = string.split(" ")
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length >= 5){
        arr[i] = arr[i].split("")
        arr[i] = arr[i].reverse()
        arr[i] = arr[i].join("")
      }
    }
    return arr.join(" ")
  }