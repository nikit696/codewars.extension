function solution(str){
    if (str.length % 2 === 1){
      str += "_"
    }
   let arr = str.split("")
   let arr1 = []
   for (let i = 0; i < str.length; i += 2){
     arr1.push(arr[i] + arr[i + 1])
     }
   return arr1
 }
 