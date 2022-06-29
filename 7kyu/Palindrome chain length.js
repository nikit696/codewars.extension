var palindromeChainLength = function(n) {
    for (let i = 0;;i++){
      let nReverse = Number(String(n).split("").reverse().join(""))
      if (n === nReverse){
        return i
      } else {
        n += nReverse
      }
    }
  };