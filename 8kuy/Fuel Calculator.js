function fuelPrice(litres, pricePerLitre) {
  let discount = litres <= 10 ? Math.floor(litres / 2) * 0.05 : 0.25
  return Math.round((litres * pricePerLitre - Math.floor(litres) * discount) * 100) / 100
}