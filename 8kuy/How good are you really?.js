function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let total = 0;
    for (let i = 0; i < classPoints.length; i++){
      total += classPoints[i]
    }
    let averageOfMarks = total / classPoints.length;
    if (averageOfMarks < classPoints[classPoints.length - 1]){
      return true;
    } else {
      return false;
    }
    // Your code here
  }