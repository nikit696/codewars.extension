function getSum( a,b ){
    if (a === b){
      return a;
    }
    let sum = 0;
    if (a > b){
      for (let i = a, k = b; k <= i ; k++){
        sum += k
    }
    }
      if (b > a){  
      for (let i = b, k = a; k <= i; k++){
          sum += k
        }
      }
    
    return sum;
    }
    //Good luck!