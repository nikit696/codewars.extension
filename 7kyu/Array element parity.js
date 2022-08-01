function solve(arr){
    return arr.filter((item,_,array) => !array.includes(-item))[0]
};