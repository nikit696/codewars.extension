function shortcut (string) {
  string = string.split("");
  let vowels = ["a","e","i","o","u"]
  let newString = "";
  for (let i = 0; i < string.length; i++){
    for (let j = 0; j < vowels.length; j++){
      if(string[i] === vowels[j]){
        string.splice(i, 1)
        i--
      }
    }
  }
  return string.join("")
}