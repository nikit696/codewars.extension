function howMuchILoveYou(nbPetals) {
    return (nbPetals % 6 === 0) ? "not at all"
          :(nbPetals % 5 === 0) ? "madly"
          :(nbPetals % 4 === 0) ? "passionately"
          :(nbPetals % 3 === 0) ? "a lot"
          :(nbPetals % 2 === 0) ? "a little"
          : "I love you"// your code
}
console.log(2 % 6)