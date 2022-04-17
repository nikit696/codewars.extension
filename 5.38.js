function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin){
    if (sharkDistance  * 2 / sharkSpeed > pontoonDistance / youSpeed){
      return "Alive!"
    } else {
      return "Shark Bait!"
    }
  } else {
    if (sharkDistance  / sharkSpeed > pontoonDistance / youSpeed){
      return "Alive!"
    } else {
      return "Shark Bait!"
    }
  }
}