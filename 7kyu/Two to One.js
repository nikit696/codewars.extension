function longest(s1, s2) {
  let s3 = (s1 + s2).split("")
  let arr = s3.filter((item, pos) =>{return s3.indexOf(item) == pos})
  return arr.sort().join("")
}