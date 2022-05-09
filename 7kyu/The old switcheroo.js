
function vowel2index(str) {
   return str.split("").map((item, index) => item.toLowerCase() === "a" || item.toLowerCase() === "e" || item.toLowerCase() === "i" || item.toLowerCase() === "o" || item.toLowerCase() === "u" ? item = index + 1 : item).join("")
}

function vowel2index(str) {
   return str.split("").map((item,index) => item.toLowerCase() === "a" || item.toLowerCase() === "e" || item.toLowerCase() === "i" || item.toLowerCase() === "o" || item.toLowerCase() === "u" ? item = index + 1 : item).join("")
}