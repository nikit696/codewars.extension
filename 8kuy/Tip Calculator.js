function calculateTip(amount, rating) {
  return /^terrible$/i.test(rating) ? 0
        :/^poor$/i.test(rating) ? Math.ceil(amount * 0.05)
        :/^good$/i.test(rating) ? Math.ceil(amount * 0.1)
        :/^great$/i.test(rating) ? Math.ceil(amount * 0.15)
        :/^excellent$/i.test(rating) ? Math.ceil(amount * 0.2) 
        : "Rating not recognised"
  
        
              
}