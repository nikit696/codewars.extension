var repeatIt = function(str, n) {
  if (typeof str != "string"){
    return "Not a string"
  }
  let newStr  = ""
  for (let i = 1; i <= n; i++){
   newStr += str
 }
  return newStr
}