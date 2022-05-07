function isLucky(n) {
  let sum = (n + "").split("").reduce((acc, curr) => acc + +curr, 0)
  return sum === 0 || sum % 9 === 0
}