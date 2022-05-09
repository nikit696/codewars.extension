var func = function(item){
    return item % 2 === 0 ? true : false
}

function map(arr, somefunction){
  let string = arr.join("")
  if (typeof somefunction === "function"){
  if (/[^0-9]/.test(string)){
    return 'array should contain only numbers'
  } 
  return arr.map(somefunction)
  } else {
    return 'given argument is not a function'
  }
}