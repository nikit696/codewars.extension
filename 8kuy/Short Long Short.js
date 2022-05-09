function solution(a, b){
    let arr1 = a.split("");
    let arr2 = b.split("");
    let arr3 = "";
    if (arr1.length > arr2.length){
        arr3 = arr2.concat(arr1.concat(arr2));
  }  else {
     arr3 = arr1.concat(arr2.concat(arr1))
    }
    return arr3.join("");
  }
  