
function swap (string) {
  return string.replace(/[aeuio]/g, a => a.toUpperCase())
}

function swap (string) {
  return string.split("").map(a => /[aeiou]/.test(a) ? a.toUpperCase()  : a).join("")
}