function XO(str) {
  str = str.toLowerCase();
  str = str.split('');
  let xS = 0
  let oS = 0
  for (let i = 0; i < str.length; i++){
    if (str[i] === "x"){
      xS++;
    }
    if (str[i] === "o"){
      oS++;
    }
  }
  return (xS === oS)
    //code here
}