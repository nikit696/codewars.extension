function solve(a,b){
    return b.map(function(curr){
      let count = 0
      for (let i = 0; i < a.length ; i++){
        if (curr === a[i]){
          count++
        }
      }
      return count
    })
   }