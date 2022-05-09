Plus - minus - plus - plus - ... - Count
JavaScript:
const catchSignChange = arr => arr.reduce((acc,curr,index,array) =>{
  if ((curr >= 0 && array[index + 1] < 0) || (curr < 0 && array[index + 1] >= 0)){
       acc++
      }
  return acc
}, 0) ;
function scrollingText(text){
  text = text.toUpperCase()
  let arr = [text]
  for (let i = 1; i < text.length; i++){
    arr.push(text.substring(i) + text.substring(0, i))
  }
  return arr
}