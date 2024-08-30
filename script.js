let currentInput = '';
let operator = '';
let firstOperand = null;

const inputField = document.getElementById('input');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');

function updateInput(value) {
    currentInput += value;
    inputField.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
    }
    operator = op;
    currentInput = '';
}

function calculate(first, second, op) {
    switch (op) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case 'x':
            return first * second;
        case '÷':
            return first / second;
        default:
            return second;
    }
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    const result = calculate(firstOperand, parseFloat(currentInput), operator);
    inputField.value = result;
    currentInput = '';
    operator = '';
    firstOperand = result;
}

// Обработчики событий для кнопок
document.querySelectorAll('.second_str button, .third_str button, .fourth_str button, .fifth_str button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.classList.contains('operator')) {
            setOperator(value);
        } else if (button.id === 'equals') {
            calculateResult();
        } else {
            updateInput(value);
        }
    });
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    operator = '';
    firstOperand = null;
    inputField.value = '';
});
