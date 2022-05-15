function high(x){
    let alphabet = ["0","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    x = x.split(" ")
    let a = x.map((item,index)=>{
      let count = 0
      for (let i = 0; i < item.length; i++){
        count += alphabet.indexOf(item[i])
      }
      return count
    })
    return x[a.indexOf(Math.max(...a))]
   }