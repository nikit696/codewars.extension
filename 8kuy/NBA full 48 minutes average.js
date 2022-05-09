
function pointsPer48(ppg, mpg) {
 return +(48 * ppg / mpg).toFixed(1) || 0
}

function pointsPer48(ppg, mpg) {
 return ppg === 0 || mpg === 0 ? 0 : Number((48 * ppg / mpg).toFixed(1))
}