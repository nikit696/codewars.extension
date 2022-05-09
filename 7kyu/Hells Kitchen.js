
function gordon(a){
  return a.toUpperCase().replace(/A/g, "@").replace(/[eiou]/ig, "*").split(" ").map(a => a + "!!!!").join(" ")
}