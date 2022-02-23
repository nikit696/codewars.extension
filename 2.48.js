function sortByLength (array) {
  return array.sort((a,b) => {if(a.length > b.length) {
    return 1 } else {return -1}})// Return an array containing the same strings, ordered from shortest to longest
};