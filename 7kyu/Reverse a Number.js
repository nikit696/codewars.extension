function reverseNumber(n) {
  return (n <= 0) ? -String(n).substr(1).replace(/0+$/, "").split("").reverse().join("")
  : +String(n).replace(/0+$/, "").split("").reverse().join("") 
}