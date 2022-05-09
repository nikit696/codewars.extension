function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let total = blueStart + redStart
  let pulled = bluePulled + redPulled
  let countBlue = blueStart - bluePulled
  return countBlue / (total - pulled)
}