function sentencify(words) {
  words[0] = words[0].substring(0,1).toUpperCase() + words[0].substring(1)
  return words.join(" ") + "."
}