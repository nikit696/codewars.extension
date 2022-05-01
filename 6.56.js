function makePassword(phrase) {
  phrase = phrase.replace(/i/ig, "1").replace(/o/ig, "0").replace(/s/ig, "5").split(" ")
  return phrase.reduce((acc,curr) => acc + curr[0], "")
  
}