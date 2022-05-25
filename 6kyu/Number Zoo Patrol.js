// return the missing number!
function findNumber(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
      sum += array[i];
    }
    
    // the total sum of numbers between 1 and arr.length.
    let total = (array.length + 1) * (array.length + 2) / 2;
    
    return total - sum
    }