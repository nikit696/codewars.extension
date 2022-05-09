
const catchSignChange = arr => arr.reduce((acc,curr,index,array) =>{
  if ((curr >= 0 && array[index + 1] < 0) || (curr < 0 && array[index + 1] >= 0)){
       acc++
      }
  return acc
}, 0) ;