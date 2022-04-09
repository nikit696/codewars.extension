function inAscOrder(arr) {
  // Code your algorithm here :)
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] >= arr[i + 1]){
      return false
  }
  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
  }
  return true
  }