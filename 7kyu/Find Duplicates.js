function duplicates(arr) {
    return arr.reduce(function(prev, cur, i, a) {
      if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  }
   console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]))