function summy(string){
    return string.split(" ").reduce((a,b) => a + +b, 0)
}