function killer(suspectInfo, dead) {
  for (let key in suspectInfo){
    if (dead.every(elem => suspectInfo[key].includes(elem))){
      return key
    } else {
      continue
    }
  }
}