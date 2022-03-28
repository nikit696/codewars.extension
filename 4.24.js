function apples(kilos, price) {
  let discount = kilos >= 1 ? Math.round(kilos / 2) * 5 / 100 : 1
  return discount < 1 ? kilos * price - (kilos * price * discount) : kilos * price
}