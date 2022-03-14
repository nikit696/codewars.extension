function remove (string) {
  string = string.replace(/!/g, "")   
  return string + "!"
}