
function area(d,l){
  return d > l ? +(Math.sqrt(d**2 - l**2) * l).toFixed(2) : "Not a rectangle"
}