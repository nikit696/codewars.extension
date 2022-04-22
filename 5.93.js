function bloodAlcoholContent(d, w, sex, time){
  let a = d.ounces * d.abv
  let r = sex === "male" ? 0.73 : 0.66
  return +((a * 5.14 / w * r) - 0.015 * time).toFixed(4)
}