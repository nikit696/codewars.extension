var greet = function(name) {
  name = name[0].toUpperCase() + name.substr(1).toLowerCase()
  return `Hello ${name}!`
};