function hasUniqueChars(str){
  str = str.split("")
  let str1 = str.filter((item,index) => str.indexOf(item) === index)
  return str.length === str1.length
}