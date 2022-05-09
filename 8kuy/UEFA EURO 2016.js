function uefaEuro2016([x1, x2], [a, b]){
  return a > b ? `At match ${x1} - ${x2}, ${x1} won!` : a < b ? `At match ${x1} - ${x2}, ${x2} won!` : `At match ${x1} - ${x2}, teams played draw.`
}