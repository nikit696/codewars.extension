function moveTen(s){
    let alphabet = [
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
    let string = ""
    for (let i = 0; i < s.length; i++){
      string += alphabet[(alphabet.indexOf(s[i]) + 10) % 26]
    }
    return string
  }