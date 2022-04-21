function firstToLast(str,c){
  let i = str.indexOf(c)
  let k = str.lastIndexOf(c)
  return i !== k ? k - i : k === i && k !== -1 ? 0 : -1
  
}