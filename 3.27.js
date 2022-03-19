function converter (mpg) {
  let mile = 1.609344, ig = 4.54609188
  return +(mile * mpg / ig).toFixed(2)
}