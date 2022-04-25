// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args

function Cube(n = 0) {
  this.side = n
  this.getSide = function() {return this.side};
  this.setSide = function(n) {
    if (isNaN(n) === false){return this.side = Math.abs(n) }
  };
};