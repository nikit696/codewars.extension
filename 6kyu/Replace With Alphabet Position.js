function alphabetPosition(text) {
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  text = text.split("")
  let arr = []
  for (let i = 0; i < text.length; i++){
    if (alphabet.includes(text[i].toUpperCase())){
       arr.push(alphabet.indexOf(text[i].toUpperCase()) + 1)
    }
  }
  return arr.join(" ")
}