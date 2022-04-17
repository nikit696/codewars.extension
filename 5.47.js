console.log (device.encode ('What is this ?')) ;
device.decode = w =>
  [...Array(65)].reduce(pre => device.encode(pre), w);