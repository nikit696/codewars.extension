const cannonsReady = (gunners) => {
  for (let key in gunners){
    if (gunners[key] === "nay"){
      return "Shiver me timbers!"
    }
  }
  return "Fire!"
}