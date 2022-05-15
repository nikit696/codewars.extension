var wireCode = Object.keys(global)
let numVariable = wireCode.filter(key => (typeof global[key] === 'number'))[0]// Find the wire.
Bomb.CutTheWire(global[numVariable]);