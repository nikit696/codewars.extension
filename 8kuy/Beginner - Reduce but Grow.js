function grow(x){
    let multiply = 1;
    for (let i = 0; i < x.length; i++){
      multiply *= x[i];
    }
     return multiply;
     }