function removeSmallest(numbers) {
 if (numbers.length < 2){
   return [];
 }
 let minNumber = Math.min(...numbers)
 let arr = []
 for (let i = 0; i < numbers.length; i++){
   if(numbers[i] === minNumber && numbers.indexOf(numbers[i]) === i){
     continue;
     
   } else {
     arr.push(numbers[i])
   }
 }
  return arr
  
}