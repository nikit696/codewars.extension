var gimme = function (triplet) {
  if ((triplet[0] < triplet[1] && triplet[0] > triplet[2])
    || (triplet[0] > triplet[1] && triplet[0] < triplet[2]))
    return 0;
    
  if ((triplet[1] < triplet[0] && triplet[1] > triplet[2])
    || (triplet[1] > triplet[0] && triplet[1] < triplet[2]))
    return 1;
    
  if ((triplet[2] < triplet[0] && triplet[2] > triplet[1])
    || (triplet[2] > triplet[0] && triplet[2] < triplet[1]))
    return 2;
};