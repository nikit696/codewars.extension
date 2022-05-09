
function switcher(x){
 let reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba!? "
 return x.map(item => reverseAlphabet[item - 1]).join("")
}

function switcher(x){
 let reverseAlphabet = "zyxwvutsrqponmlkjihgfedcba!? "
 return x.map((item, index) => reverseAlphabet[+item - 1]).join("")
}