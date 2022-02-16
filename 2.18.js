var countBits = function(n) {
    n = n.toString(2)
    let bin = 0;
    for (let i = 0; i < n.length; i++){
      if (n[i] == 1){
        bin++
      }
    }
    return bin
  };