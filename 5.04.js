function switcher(x){
 let reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba!? "
 return x.map(item => reverseAlphabet[item - 1]).join("")
}
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))