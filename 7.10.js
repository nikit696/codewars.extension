Array.prototype.square = function(){
    return this.map(a => a**2)
  }
  Array.prototype.cube = function(){
    return this.map(a => a**3)
  }
  Array.prototype.average = function(){
    return this.length === 0 ? NaN : this.reduce((acc,curr) => acc +curr) / this.length
  }
  Array.prototype.sum = function(){
    return this.reduce((acc,curr) => acc + curr)
  }
  Array.prototype.even = function(){
    return this.filter(a => a % 2 === 0)
  }
  Array.prototype.odd = function(){
    return this.filter(a => a % 2 === 1)
  }