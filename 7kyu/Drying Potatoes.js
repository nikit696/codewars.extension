
function potatoes(p0, w0, p1) {
    return Math.floor((w0 * (100 - p0)) / (100 - p1))
}

function potatoes(p0, w0, p1) {
    return Math.floor(w0 * ((100 - p0)/100) / ((100 - p1)/100))
}