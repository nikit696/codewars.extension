
function makeString(s){
 s = s.split(" ")
  return s.reduce((acc, curr) => acc += curr[0], "")
}