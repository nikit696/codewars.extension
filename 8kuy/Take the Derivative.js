function derive(coefficient,exponent) {
  let multiply = coefficient * exponent, diff = exponent - 1
  return `${multiply}x^${diff}`
}