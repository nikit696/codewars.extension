function scrollingText(text){
  text = text.toUpperCase()
  let arr = [text]
  for (let i = 1; i < text.length; i++){
    arr.push(text.substring(i) + text.substring(0, i))
  }
  return arr
}