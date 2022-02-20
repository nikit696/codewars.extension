function printerError(s) {
    s = s.split("")
    let arr1 = s.filter(item =>{return /[a-m]/.test(item)})
    let n = s.length - arr1.length
    return `${n}/${s.length}`
}