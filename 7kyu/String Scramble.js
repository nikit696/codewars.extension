
function scramble(str, arr) {
  return str.split("").reduce((acc,curr,index,array)=> acc += array[arr.indexOf(index)], "")
};