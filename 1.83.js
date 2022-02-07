function hello(name) {
  if (name){
    name = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello, ${name}!`
  } else {
    return `Hello, World!`
  }
}