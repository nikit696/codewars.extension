function nicknameGenerator(name){
  return name.length < 4 ? "Error: Name too short" 
        : (/[aeiou]/.test(name[2])) ? name.substr(0, 4) : name.substr(0, 3)
}