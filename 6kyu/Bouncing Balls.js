function bouncingBall(h,  bounce,  window) {
  if (h > 0 && (bounce > 0 && bounce < 1) && window < h){
    let n = 0
  for (; h > window; h *= bounce){
    if (h * bounce > window){
      n += 2
    } else {
      n++
      break;
    }
  }
  return n
  } else {
    return -1
  }
}