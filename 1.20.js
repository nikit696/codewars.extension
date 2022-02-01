function bmi(weight, height) {
  return (weight / (height * height) <= 18.5) ? "Underweight"
        :(weight / (height * height) <= 25.0) ? "Normal"
        :(weight / (height * height) <= 30.0) ? "Overweight"
        :(weight / (height * height) > 30) ? "Obese" : "z emr"
}