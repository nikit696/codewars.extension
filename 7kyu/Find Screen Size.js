function findScreenHeight(width, ratio) {
    ratio = ratio.split(":")
    return `${width}x${width * ratio[1] / ratio[0]}`
}