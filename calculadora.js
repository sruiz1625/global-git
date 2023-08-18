function addToScreen(value) {
    document.getElementById('display').value += value;
  }
  
  function clearScreen() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, displayValue.length - 1);
  }
  
  function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
  }