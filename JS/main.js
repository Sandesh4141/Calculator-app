let deleteButton = document.getElementById('del');
let resetButton = document.getElementById('reset');
let equalButton = document.getElementById('total');
let numbers = document.querySelectorAll('.numbers');
let operations = document.querySelectorAll('.operator');
let screen = document.getElementById('screen');

var variables = ['', ''];
var operator = '';
var id = 0;

function resetAll() {
    variables = [' ', ' '];
    operator = '';
    id = 0;
    updateScreen();
}
function updateScreen() {
    if (variables[id] == '') {
        screen.innerText = '0';
    }
    else {
        screen.innerText = variables[id];
    }
}
function del() {
    if (variables[id].length > 0) {
        variables[id] = variables[id].substr(0, variables[id].length - 1);
        updateScreen();
    }
}

function calculate() {
    var res = eval(variables[0] + operator + variables[1]);
    operator = '';
    variables[1] = '';
    variables[0] = res;
    id = 0;
    updateScreen();
    variables[0] = '';
}


resetButton.addEventListener('click', resetAll);
numbers.forEach(button => {
    button.addEventListener('click', () => {
        const regexp = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;
        if (regexp.test(variables[id] + button.innerText)) {
            variables[id] += button.innerText;
            updateScreen();
        }
    });
});

deleteButton.addEventListener('click', del);
operations.forEach(button => {
    button.addEventListener('click', () => {
        if (variables[0] == '' && screen.innerText != '0') {
            variables[0].screen.innerText;
        }
        id++;
        switch (button.innerText) {
            case '+':
            case '-':
            case '/':
                operator = button.innerText;
                break;
            case 'X':
                operator = '*';
        }

    });
});
equalButton.addEventListener('click', calculate);