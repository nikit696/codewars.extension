function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;" ).replace(/</g, "&lt;").replace(/\"/g, "&quot;").replace(/>/g, "&gt;")
}