let deleteButton = document.getElementById('del');
let resetButton = document.getElementById('reset');
let equalButton = document.getElementById('total');
let numbers = document.querySelectorAll('.numbers');
let operations = document.querySelectorAll('.operator');
let screen = document.getElementById('screen');

var variables = ['', ''];
var operator = '';
var  id = 0;

function resetAll(){
    variables = [' ', ' '];
    operator = '';
    id = 0;
    updateScreen();
}
function updateScreen(){
    if(variables[id] == ''){
        screen.innerText = '0';
    }
    else{
        screen.innerText = variables[id];
    }
}
function del(){
    if(variables[id].length > 0){
        variables[id] = variables[id].substr(0, variables[id].length-1);
        updateScreen();
    }
}