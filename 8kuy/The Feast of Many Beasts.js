function feast(beast, dish) {
    let arr1 = beast.split("")
    let arr2 = dish.split("")
    let a = arr1.pop();
    let b = arr1.shift();
    let c = arr2.pop();
    let d = arr2.shift();
    return (a == c && b == d) ? true : false;
   //your function here
   }