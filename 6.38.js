function solve(arr){
    arr.sort((a, b) => a - b)
    let array = []
    for (let i = 0; i < arr.length / 2; i++){
      if (i < arr.length - 1 - i){
        array.push(arr[arr.length - 1 - i], arr[i])
      }
      }
  if (arr.length % 2 === 1){
    array.push(arr[Math.floor(arr.length / 2)])
  }
  return array
};