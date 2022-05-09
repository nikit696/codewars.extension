function sortArray(array) {
    let arrayOdd = []
    for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 1 || array[i] % 2 === -1){
        arrayOdd.push(array[i])
      }
      }
      let arraySortOdd = arrayOdd.sort(function(a, b){
        return a - b;
      });
    for ( let i = 0, j = 0; i < array.length, j < arraySortOdd.length; i++){
      if (array[i] % 2 === 1 || array[i] % 2 === -1){
        array[i] = arraySortOdd[j]
      j++
      }
    }
   return array
    // Return a sorted array.
  }