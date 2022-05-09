function fakeBin(x){
let arr = x.split("");
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= 5 ){
      arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }
  return arr.join("");
  }