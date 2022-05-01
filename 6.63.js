const sumSquareEvenRootOdd = ns => {
  ns = ns.map(a => a % 2 === 0 ? a**2 : Math.sqrt(a))
  return Math.round(ns.reduce((acc,curr) => acc + curr, 0) * 100) / 100
};