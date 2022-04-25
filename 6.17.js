function Hero (name) {
  Hero.prototype.name =  name ? name : "Hero"
  Hero.prototype.position = "00"
  Hero.prototype.health = 100
  Hero.prototype.damage = 5
  Hero.prototype.experience = 0
}