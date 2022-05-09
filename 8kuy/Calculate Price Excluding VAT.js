//return price without vat
function excludingVatPrice(price){
  // your code
  return price !== null ? Math.round(price / 0.0115) / 100 : -1
}