// Get all the buttons and displays
const buttons = document.querySelectorAll(".button");
const primaryDisplay = document.querySelector(".primary-display");
const secondaryDisplay = document.querySelector(".secondary-display");

// Initialize the variables
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("operator")) {
      currentOperator = button.textContent;
      secondaryDisplay.textContent = firstOperand + " " + currentOperator;
      primaryDisplay.textContent = "";
    } else if (button.classList.contains("function")) {
      if (button.textContent === "AC") {
        firstOperand = "";
        secondOperand = "";
        currentOperator = null;
        primaryDisplay.textContent = "0";
        secondaryDisplay.textContent = "";
      } else if (button.textContent === "±") {
        firstOperand = -firstOperand;
        primaryDisplay.textContent = firstOperand;
      } else if (button.textContent === "%") {
        firstOperand = firstOperand / 100;
        primaryDisplay.textContent = firstOperand;
      }
    } else if (button.classList.contains("equal")) {
      if (firstOperand && secondOperand && currentOperator) {
        let result;
        if (currentOperator === "+") {
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
        } else if (currentOperator === "-") {
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
        } else if (currentOperator === "x") {
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
        } else if (currentOperator === "÷") {
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
        }
        primaryDisplay.textContent = result;
        secondaryDisplay.textContent = "";
        firstOperand = result;
        secondOperand = "";
        currentOperator = null;
      }
    } else {
      if (!currentOperator) {
        firstOperand += button.textContent;
        primaryDisplay.textContent = firstOperand;
      } else {
        secondOperand += button.textContent;
        primaryDisplay.textContent = secondOperand;
      }
    }
  });
});
