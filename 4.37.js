function nbDig(n, d) {
    let string = ""
    for (let k = 0; k <= n; k++){
      string += String(k**2)
    }
  return string.split(String(d)).length - 1
}