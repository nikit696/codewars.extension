Mumbling
JavaScript:
function accum(s) {
  s = s.split("")
  let str = s[0].toUpperCase() + "-"
  for (let i = 2; i <= s.length; i++){
    if(i !== s.length){
      str += s[i - 1].toUpperCase() + s[i - 1].toLowerCase().repeat(i - 1) + "-"
} else {
  str += s[i - 1].toUpperCase() + s[i - 1].toLowerCase().repeat(i - 1)
}
  }
  return str
  }
  