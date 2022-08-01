function oddOne(arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 1 || arr[i] % 2 === -1){
        return i
      }
    }
    return -1
  }
console.log(oddOne([2,16,98,10,13,78]))