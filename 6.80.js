function longestWord(stringOfWords){
  let arr = stringOfWords.split(" ")
  let str = ""
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length >= str.length){
      str = arr[i]
    }
  }
  return str
}