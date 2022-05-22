var findMissing = function (list) {  
    let d
     if (list[1] - list[0] >= 0){
      d = Math.min(list[list.length - 1] - list[list.length - 2], list[1] - list[0])
      } else {
       d = Math.max(list[list.length - 1] - list[list.length - 2], list[1] - list[0])
      }
    for (let i = 0; i < list.length; i++){
      if (list[i] + d !== list[i + 1]){
        return list[i] + d
      }
    }
   }