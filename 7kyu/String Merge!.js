function stringMerge(string1, string2, letter){
  return string1.substring(0, string1.indexOf(letter)) + string2.substring(string2.indexOf(letter))
}