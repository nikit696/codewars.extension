function race(v1, v2, g) {
    if (v1 > v2){
      return null
    }
    let lymbda = v2 - v1
    let time = g / lymbda
    let array = []
    array[0] = Math.floor(time)
    array[1] = Math.floor(time * 60 - array[0] * 60)
    array[2] = Math.floor(time * 3600 - array[1] * 60 - array[0] * 3600)
    return array
}