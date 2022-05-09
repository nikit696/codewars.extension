var number = function(busStops){
  let passangers = 0;
  for (let i = 0; i < busStops.length; i++){
    passangers += busStops[i][0]
    passangers -= busStops[i][1]
  }
  return passangers;
  // Good Luck!
}