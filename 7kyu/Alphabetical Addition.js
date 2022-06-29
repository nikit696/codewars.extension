function addLetters(...letters) {
    if (letters.length === 0){
      return "z"
    }
    let alphabet = [
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]
    let sum = 0
    for (let i = 0; i < letters.length; i++){
      sum += alphabet.indexOf(letters[i])
    }
    return alphabet[sum % 26 === 0 ? 26 : sum % 26]
  }