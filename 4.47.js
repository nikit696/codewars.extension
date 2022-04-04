function swap(str){
  str = str.split("")
  let string = str.map((item) => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase())
  return string.join("")
}