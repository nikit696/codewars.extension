
"use strict";

function flattenAndSort(array) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray = newArray.concat(array[i])
  }
  return newArray.sort((a, b) => a - b);
}