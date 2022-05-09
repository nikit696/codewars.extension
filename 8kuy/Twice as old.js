function twiceAsOld(dadYearsOld, sonYearsOld) {
    sonYearsOld *= 2;
    if (sonYearsOld >= dadYearsOld){
      return sonYearsOld - dadYearsOld;
    } else {
      return dadYearsOld - sonYearsOld;
    }
    // your code here
  }