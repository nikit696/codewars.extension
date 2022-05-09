function removeChar(str){
    let str1 = 0;
    str1 = str.split("");
    str1.shift();
    str1.pop();
    return str1.join("");
   }