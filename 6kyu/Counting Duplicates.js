function duplicateCount(text){
  return text.toLowerCase().split('').filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}