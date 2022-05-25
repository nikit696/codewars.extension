function decipherThis(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++){
      str[i] = str[i].replace(/^\d+/, String.fromCharCode(str[i].match(/^\d+/)))
      if (str[i].length > 2){
      str[i] = str[i].slice(0,1) + str[i].slice(str[i].length - 1) + str[i].slice(2,str[i].length - 1) + str[i].slice(1,2)
        }
    }
      return str.join(" ")
    }; 