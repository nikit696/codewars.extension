function capitalize(s){
  s = s.split("")
  let str1 = ""
  let str2 = ""
  for (let i = 0; i < s.length; i++){
    if (i % 2 === 1){
      str1 += s[i].toUpperCase()
      str2 += s[i]
    } else {
      str2 += s[i].toUpperCase()
      str1 += s[i]
    }
  }
  return [str2, str1]
};