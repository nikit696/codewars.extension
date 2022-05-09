
var number=function(array){
  for (let i = 0, k = 1; i < array.length; i++, k++){
    array[i] = `${k}: ${array[i]}`
  }
  return array
}