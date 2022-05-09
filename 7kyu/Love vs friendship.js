function wordsToMarks(string){
  const alphabet = ["0","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return string.split("").reduce((a, b) => a + alphabet.indexOf(b), 0)
}