function tidyNumber(n){
    n = n+"".split("").map(Number)
   for (let i = 0; i < n.length - 1; i++){
     if (n[i] > n[i + 1]){
       return false
     }
   }
   return true
 }