function solve(arr){  
 let strAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let nums =   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
 let num = []
 for (let i = 0; i < arr.length; i++){
   arr[i] = arr[i].split("")
   let n = 0
   for (let k = 0; k < arr[i].length; k++){
     if (strAlph.indexOf(arr[i][k].toUpperCase()) === k){
       n++
     }
     }
   num.push(n)
 }
  return num
};