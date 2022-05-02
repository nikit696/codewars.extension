function determineTime (durations) {
  return durations.reduce((acc,curr) =>{
    curr = curr.split(":")
    return acc = acc + +curr[0] * 3600000 + +curr[1] * 60000 + +curr[2] * 100
  }, 0) <= 86400000
  
}