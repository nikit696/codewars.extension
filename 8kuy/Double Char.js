function doubleChar(str) {
    let newString = "";
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++){
      newString = newString + arr[i] + arr[i]; 
      }
    return newString;
    // Your code here
  }