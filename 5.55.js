function magNumber(info){
  return info[0] === "PT92" ? Math.ceil(info[1] * 3 / 17) : info[0] === "M4A1" || info[0] === "M16A2" ? Math.ceil(info[1] * 3 / 30) : Math.ceil(info[1] * 3 / 5)
}
