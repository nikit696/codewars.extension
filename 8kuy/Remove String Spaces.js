function noSpace(x){
    let arr = x.split("");
    let str = "";
      for (let i = 0; i < arr.length; i++){
        if (arr[i] !== " "){
          str += arr[i];
        }
        }
      return str;
      }