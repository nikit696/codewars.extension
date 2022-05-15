function isPangram(string){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    string = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (string.indexOf(alphabet[i]) === -1)
            return false;
    }
    return true;
}