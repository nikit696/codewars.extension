function findDup( arr ){
 for (let i = 0; i < arr.length; i++){
   if (arr.lastIndexOf(arr[i]) != arr.indexOf(arr[i])){
       return arr[i]
       }
 }
}