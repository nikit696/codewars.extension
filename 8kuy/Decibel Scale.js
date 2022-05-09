function dBScale(intensity) {
  return 10 * Math.log(intensity / Math.pow(10, -12)) / Math.log(10)
}