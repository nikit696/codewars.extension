var FilterNumbers = function(str) {
  return str.split('').filter(c => /\D/.test(c)).join('');
}