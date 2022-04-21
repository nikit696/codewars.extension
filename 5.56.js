function toFreud(string) {
  if (string.length === 0){
    return ""
  } else {
    return string.split(" ").map(a => "sex").join(" ")
  }
}