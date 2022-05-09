function elevator(left, right, call){
  if (left === call && right !== call || (Math.abs(left - call) < Math.abs(right - call))){
    return `left`
  } else {
    return `right`
  }
  // code on! :)
}