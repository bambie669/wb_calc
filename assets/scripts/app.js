const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const description = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + parseInt(userInput.value)
  outputResult(currentResult, description)
}

addBtn.addEventListener('click', add);