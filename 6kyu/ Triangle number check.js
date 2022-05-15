function isTriangleNumber(number) {
    if (typeof number !== "number" || number < 0){
      return false
    }
    for (let i = 1; i < Infinity; i++){
     if (number !== 0){
       number -= i
     }
     if (number < 0){
       return false
     } else if (number > 0){
       continue
     } else {
       return true
     }
       }
    }
  