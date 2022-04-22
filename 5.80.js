function uniTotal (string) {
  if (string.length === 0) {
    return 0
  }
  return string.split("").map((a) => a.charCodeAt()).reduce((a,b) => a + b)
}