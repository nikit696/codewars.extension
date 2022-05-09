function enough(cap, on, wait) {
    if (cap < on + wait){
      return (on + wait - cap)
    } else {
      return 0;
    }
    // your code here
  }