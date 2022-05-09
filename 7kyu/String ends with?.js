function solution(str, ending){
  let arr1 = str.split('').reverse()
  let arr2 = ending.split('').reverse()
  for (let i = 0; i < arr2.length; i++){
    if (arr1[i] !== arr2[i]){
      return false
    }
  }
  return true;
  // TODO: complete
}