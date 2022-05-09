
function nthChar(words){
 return words.reduce((acc,curr,index) =>{
   return acc + curr.substring(index, index + 1)
 }, "")
}