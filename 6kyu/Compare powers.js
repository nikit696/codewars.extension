
function comparePowers(n1,n2){
  return Math.sign(n2[0] - n1[0] ** (n1[1] / n2[1]));
}