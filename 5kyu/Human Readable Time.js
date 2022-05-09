function humanReadable (seconds) {
    let hh = 0;
    let mm = 0;
    let ss = 0;
    for (let i = 1; 3600 * i <= seconds; i++){
      hh++
  }
    seconds = seconds - (hh * 3600)
    for (let i = 1; 60 * i <= seconds; i++){
      mm++;
    }
    ss = seconds - (mm * 60)
    hh = String(hh);
    mm = String(mm);
    ss = String(ss);
    let numberLength = 0; 
    numberLength = 2
    if (numberLength > hh.length){
      hh = "0" + hh
    } 
    if (numberLength > mm.length){
      mm = "0" + mm
    } 
    if (numberLength > ss.length){
      ss = "0" + ss
    } 
    
    
    return `${hh}:${mm}:${ss}`
  }