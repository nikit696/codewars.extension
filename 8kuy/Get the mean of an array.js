function getAverage(marks){
  
    var sum = 0;
    for (let i = 0; i < marks.length; i++){
     sum += marks[i];
    }
     return Math.floor(sum / marks.length);
    //TODO : calculate the downward rounded average of the marks array
  }