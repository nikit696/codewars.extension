function validatePIN (pin) {
  return /^(\d{4}|\d{6})$/gi.test(pin)
}