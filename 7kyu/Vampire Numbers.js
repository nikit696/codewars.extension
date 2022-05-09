
var vampire_test = function(a, b){
  let multiply = a * b
  return (a + "" + b).split("").sort().join("")  === (multiply + "").split("").sort().join("")
}