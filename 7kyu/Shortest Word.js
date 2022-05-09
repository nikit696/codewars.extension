function findShort(s){
    let arr = s.split(" ");
    let string = arr[0];
    for (let i = 1; i < arr.length; i++){
      if(arr[i].length < string.length){
        string = arr[i];
      }
    }
    return string.length;
  }
  