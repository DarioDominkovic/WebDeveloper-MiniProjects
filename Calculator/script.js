let displayValue = "";
const resultField = document.getElementById("result");

function appendToDisplay(value) {
  displayValue += value;
  resultField.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  resultField.value = "";
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    resultField.value = result;
    displayValue = result.toString();
  } catch (error) {
    resultField.value = "Error";
  }
}
