String.prototype.digit = function() {
  return /^[0-9]{1}$/.test(this);
};