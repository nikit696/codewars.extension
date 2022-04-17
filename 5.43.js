function isOpposite(s1,s2){
  s1 = s1.split("")
  s2 = s2.split("")
  return s1.length === s2.length && s1.length !== 0 ? s1.every((a, i) => a !== s2[i]) : false
  
}