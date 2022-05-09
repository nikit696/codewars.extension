function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i] === true){
        sheep++;
      }
    }
    return sheep;
    // TODO May the force be with you
  }