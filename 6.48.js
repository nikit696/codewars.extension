function smaller(nums) {
 return nums.map((curr, index, array) =>{
   let count = 0
   for (let i = index; i < array.length; i++){
    if (array[i] < array[index]){
      count++
    }
   }
   return count
 })
}