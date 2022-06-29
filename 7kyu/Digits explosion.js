function explode(s) {
    return s.split("").reduce((acc,curr) => acc + curr.repeat(+curr), "")  
   }