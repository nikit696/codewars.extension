
function spongeMeme(sentence) {
  return sentence.split("").map((a, index) => index % 2 === 0 ? a.toUpperCase() : a.toLowerCase()).join("")
}