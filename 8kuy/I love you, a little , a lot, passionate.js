function howMuchILoveYou(nbPetals) {
    let nbPetals1 = nbPetals % 6
    return (nbPetals1 === 0) ? "not at all"
          :(nbPetals1 === 5) ? "madly"
          :(nbPetals1 === 4) ? "passionately"
          :(nbPetals1 === 3) ? "a lot"
          :(nbPetals1 === 2) ? "a little"
          : "I love you"// your code
}