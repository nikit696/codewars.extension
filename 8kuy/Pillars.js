function pillars(num_pill, dist, width) {
  if (num_pill === 1){
    return 0;
  }
  return ((num_pill - 2) * width) + ((num_pill - 1) * dist * 100) 
  // your code here
}