function reverseLetter(str) {
 let array = str.split("").filter(a => /[A-Z]/i.test(a))
 return array.reverse().join("")
}