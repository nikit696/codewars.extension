function goodVsEvil(good, evil){
good = good.split("")
evil = evil.split("")
let countGood = good.map(i=>x+=i, x=0).reverse()[0]
let countEvil = evil.map(i=>x+=i, x=0).reverse()[0]
return (countGood > countEvil) ? "Battle Result: Good triumphs over Evil" 
      :(countGood === countEvil) ? "Battle Result: No victor on this battle field"
      :"Battle Result: Evil eradicates all trace of Good"
}
console.log