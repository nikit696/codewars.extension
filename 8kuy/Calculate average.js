function find_average(array) {
    let average = 0;
    if (array.length == 0 ){
      return 0;
    } else {
    for (let i = 0; i < array.length; i++){
      average += array[i]
    }
    // your code here
    return average / array.length;
  }
  }