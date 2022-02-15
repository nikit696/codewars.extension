function arrayDiff(a, b) {
  if (a.length === 0){
    return a
  }
  let difference = a.filter(x => !b.includes(x))
                 .concat(b.filter(x => !a.includes(x)));
  return difference
}