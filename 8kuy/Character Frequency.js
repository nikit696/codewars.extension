function charFreq(message) {
  let total = {}
  message = message.split("")
  for (let i = 0; i  < message.length; i++){
    if (total.hasOwnProperty(message[i])){
      total[message[i]]++
    } else {
      total[message[i]] = 1
    }
  }
  return total
}