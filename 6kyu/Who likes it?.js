function likes(names) {
    let string1 = "no one likes this";
    let string2 = names[0] + " likes this";
    let string3 = names[0] + " and " + names[1] + " like this";
    let string4 = names[0] + ", " + names[1] + " and " + names[2] + " like this";
    let string5 = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    if (names.length == 0){
      return string1;
    } else if (names.length == 1){
      return string2
    } else if (names.length == 2){
      return string3
    } else if (names.length == 3){
      return string4
    } else {
      return string5
    }
    // TODO
  }