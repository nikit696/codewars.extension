function findMissingLetter(array)
{
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let n = alphabet.indexOf(array[0].toLowerCase())
  for (let i = n, k = 0; i < alphabet.length, k < array.length; i++, k++){
    if (array[k].toLowerCase() !== alphabet[i]){
      if (array[k] === array[k].toUpperCase()){
        return alphabet[i].toUpperCase()
      } else {
        return alphabet[i]
      }
    }
  }
}