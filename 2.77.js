function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ageSumMult = age1**2 + age2**2+ age3**2 + age4**2+ age5**2 + age6**2 + age7**2 + age8**2
  return Math.floor(Math.sqrt(ageSumMult) / 2)
}