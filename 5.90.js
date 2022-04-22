function colorOf(r,g,b){
  r = r.toString(16).length === 1 ? "0" + r.toString(16) : r.toString(16)
  g = g.toString(16).length === 1 ? "0" + g.toString(16) : g.toString(16)
  b = b.toString(16).length === 1 ? "0" + b.toString(16) : b.toString(16)
  return `#${r+g+b}`
}
