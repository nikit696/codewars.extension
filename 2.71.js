function  calculateAge(a, b) {
  let diff = a - b
  if (diff > 0){
    if (diff === 1){
      return `You will be born in ${diff} year.`
    } else {
      return `You will be born in ${diff} years.`
      }
    } else if (diff < 0){
      if (diff === -1){
         return  `You are 1 year old.`  
      } else {
      diff = Math.abs(diff)
      return  `You are ${diff} years old.`    
      }
    } else {
      return "You were born this very year!"
    }
  }

