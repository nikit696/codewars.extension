function countLettersAndDigits(input) {
    return input.match(/[0-9a-z]/gi) ? input.match(/[0-9a-z]/gi).length : 0
  }
console.log(countLettersAndDigits("hel2!lo"))