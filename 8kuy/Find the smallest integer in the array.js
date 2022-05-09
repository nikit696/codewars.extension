class SmallestIntegerFinder {
    findSmallestInt(args) {
    var min = Infinity;
      for (let i = 0; i < args.length; i++){
        if (min >  args[i]){
          min = args[i]
       }
      }
      return min;
      }
    }