function toWeirdCase(string){
  string = string.split(" ")
  for (let i = 0; i < string.length; i++){
    string[i] = string[i].split("")
    for (let k = 0; k < string[i].length; k++){
      k % 2 === 0 ? string[i][k] = string[i][k].toUpperCase() : string[i][k] = string[i][k].toLowerCase() 
    }
    string[i] = string[i].join("")
  }
  return string.join(" ")
}
console.log([3,4,5,2].join(""))