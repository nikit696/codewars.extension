function catMouse(x){
  return x.split("").filter(a => a === ".").length > 3 ? "Escaped!" : "Caught!"
}