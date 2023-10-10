function calculateBMI() {
  // get weight and height values and parse them into numerical values
  var weightInKg = parseFloat(document.getElementById("weight").value);
  var heightInCm = parseFloat(document.getElementById("height").value);

  // Check if the entered values are valid
  if (!isNaN(weightInKg) && !isNaN(heightInCm) && heightInCm > 0) {
    var heightInM = heightInCm / 100;

    // Calculate the BMI
    var bmi = weightInKg / (heightInM * heightInM);
    var result = "Your BMI is: " + bmi.toFixed(2);

    // Get the list of BMI categories and remove any highlighting classes from list items.
    var categoryList = document.getElementById("categoryList");
    var categoryItems = categoryList.getElementsByTagName("li");

    for (var i = 0; i < categoryItems.length; i++) {
      categoryItems[i].classList.remove("highlight");
    }

    // Determine the BMI category and highlight the corresponding list item.
    if (bmi < 18.5) {
      result += " (Underweight)";
      categoryItems[0].classList.add("highlight");
    } else if (bmi >= 18.5 && bmi < 25) {
      result += " (Normal Weight)";
      categoryItems[1].classList.add("highlight");
    } else if (bmi >= 25 && bmi < 30) {
      result += " (Overweight)";
      categoryItems[2].classList.add("highlight");
    } else {
      result += " (Obesity)";
      categoryItems[3].classList.add("highlight");
    }

    // Display the BMI result and category list.
    document.getElementById("result").textContent = result;
    categoryList.style.display = "block";
  } else {
    // Display an error message if the entered values are invalid.
    document.getElementById("result").textContent =
      "Please enter valid values.";
    document.getElementById("categoryList").style.display = "none";
  }
}
