function toCamelCase(str){
    let arr2 = str.split("")
    for (let i = 1; i < arr2.length; i++){
      if(arr2[i] == "_" || arr2[i] == "-"){
       arr2.splice(i, 1)
       arr2[i] = arr2[i].toUpperCase()
      }
    }
    
    return arr2.join("")
  
  }