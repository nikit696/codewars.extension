
var splitInParts = function(s, partLength){
  let str = ""
  for (let i = 0; i < s.length; i += partLength){
    if (i + partLength < s.length){
      str = str + s.slice(i, i + partLength) + " "
    } else {
      str = str + s.slice(i, s.length)
    }
  }
  return str
}