function battle(x, y) {
  const alphabet = [0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let X = x.split("").reduce((a, b) => a + alphabet.indexOf(b), 0)
  let Y = y.split("").reduce((a, b) => a + alphabet.indexOf(b), 0)
  return  X > Y ? x : Y > X ? y : "Tie!"
}