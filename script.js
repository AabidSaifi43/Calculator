let currentInput = '';
let currentOperator = '';
let prevInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    if (currentInput === '') {
        return;
    }

    try {
        prevInput = eval(currentInput);
        document.getElementById('result').value = prevInput;
        currentInput = prevInput.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}
