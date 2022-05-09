String.prototype.toAlternatingCase = function () {
  let str = this.split("")
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i].toUpperCase()){
      str[i] = str[i].toLowerCase()
    } else {
      str[i] = str[i].toUpperCase()
    }
  }
  return str.join("")
  // Define your method here :)
}