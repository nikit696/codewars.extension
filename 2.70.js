function isSortedAndHow(array) {
  let arraySort = array.concat().sort((a,b) => a - b)
  if (arraySort[0] === array[0]){
    for (let i = 0; i < array.length; i++)
   if (arraySort[i] === array[i]){
     continue;
   }
  return  'yes, ascending';
  }
  if (arraySort[0] === array[array.length - 1]){
    for (let i = 0; i < array.length; i++)
   if (arraySort[i] === array[array.length - (i + 1)]){
     continue;
}
    return 'yes, descending'
}
  
  return "no"
  }