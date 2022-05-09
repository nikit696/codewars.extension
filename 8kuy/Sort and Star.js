function twoSort(s) {
 let array = s.sort();
 let arr = array[0].split("")
 let string = "";
 for (let i = 0; i < arr.length; i++){
   if (i !== arr.length - 1){
     string += arr[i] + "***"
     } else {
       string += arr[i]
     }
 }
  return string
}