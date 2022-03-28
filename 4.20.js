function makesTheSentence(characterArray, sentenceString) {
  sentenceString = sentenceString.split(" ").join("").split("").sort().join("")
  characterArray = characterArray.sort().join("")
  return sentenceString === characterArray
}