function areYouPlayingBanjo(name) {
  // Implement me
  let redex = /^r/i;
  if(redex.test(name) === true){
    return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
  } 