const sequenceSum = (begin, end, step) => {
  let sum = 0
  if (begin < end){
  do {
    sum += begin
    begin += step
  } while (begin <= end)
    } else {
      return 0
    }
  return sum
}