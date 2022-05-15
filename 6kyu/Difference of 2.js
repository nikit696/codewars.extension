function twosDifference(input){
    input.sort((a, b)=>a-b)
    let arr = []
    for (let i = 0; i < input.length; i++){
      for (let k = 0; k < input.length; k++){
        if(input[k] - input[i] === 2){
          arr.push([input[i],input[k]])
        }
      }
    }  
    return arr
  }