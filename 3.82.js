function correctPolishLetters (string) {
  string = string.split("")
  for (let i = 0; i < string.length; i++){
    switch(string[i]){
        case "ą" : string[i] = "a"
        break;
        case "ć" : string[i] = "c"
        break;
        case "ę" : string[i] = "e"
        break;
        case "ł" : string[i] = "l"
        break;
        case "ń" : string[i] = "n"
        break;
        case "ó" : string[i] = "o"
        break;
        case "ś" : string[i] = "s"
        break;
        case "ź" : string[i] = "z"
        break;
        case "ż" : string[i] = "z"
        break;
        default : continue;
    }
  }
  return string.join("")
}