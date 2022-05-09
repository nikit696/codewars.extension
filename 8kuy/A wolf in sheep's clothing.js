function warnTheSheep(arr) {
if (arr[arr.length - 1] === "wolf"){
  return "Pls go away and stop eating my sheep";
}
  return `Oi! Sheep number ${arr.length - arr.indexOf("wolf") - 1}! You are about to be eaten by a wolf!`
    
}