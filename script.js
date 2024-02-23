let currentInput = "";

function appendToScreen(value) {
  currentInput += value;
  document.getElementById("screen").innerText = currentInput;
}

function clearScreen() {
  currentInput = "";
  document.getElementById("screen").innerText = "0";
}

function calculateResult() {
  try {
    document.getElementById("screen").innerText = eval(currentInput);
    currentInput = "";
  } catch (error) {
    document.getElementById("screen").innerText = "Error";
    currentInput = "";
  }
}
