function moveZeros(arr) {
    let lengthSynth = arr.length;
    for (let i = 0; i < lengthSynth; i++) {
    if (arr[i] === 0) {
    arr.push(0);
    arr.splice(i, 1);
    lengthSynth--;
    i--;
      }
    }
    return arr;
}