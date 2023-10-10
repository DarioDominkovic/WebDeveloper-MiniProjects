// Set the initial count value to zero
let count = 0;

// Select the HTML element
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Loop through all the buttons and add click event listeners
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Get the class list of the clicked button
    const styles = e.currentTarget.classList;

    // If the button has the "decrease" class, decrement the count
    if (styles.contains("decrease")) {
      count--;
    }
    // If the button has the "increase" class, increment the count
    else if (styles.contains("increase")) {
      count++;
    }
    // else reset the count to zero
    else {
      count = 0;
    }

    // Change the text color based on the count value
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    // Update the text content
    value.textContent = count;
  });
});
