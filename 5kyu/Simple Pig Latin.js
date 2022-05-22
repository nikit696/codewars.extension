function pigIt(str){
    let arr = str.split(" ")
    let total = []
    for (let i = 0; i < arr.length; i++){
      if (/[A-Za-z]+/.test(arr[i])){
        total.push(arr[i].slice(1) + arr[i].slice(0,1) + "ay")
      } else {
        total.push(arr[i])
      }
    }
    return total.join(" ")
  }