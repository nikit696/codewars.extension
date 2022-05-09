function reverseWords(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++){
      str[i] = str[i].split("").reverse().join("");
  }
  str = str.join(" ")
  return str;
  // Go for it
}