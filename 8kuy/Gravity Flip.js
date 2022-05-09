const flip=(d, a)=>{
  if (d === "R"){
    a.sort(function(x,b){ 
        return x - b
      });
  } else {
    a.sort(function(x,b){ 
        return b - x
      });
  }
  //TODO
  return a
}