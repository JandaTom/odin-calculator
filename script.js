/*TODO FIXES: 
1. Allow input of decimal numbers
2. Allow input of negative numbers
3. Disable typing into the input field
4. Improve styling
5. Clean up classes and adjust the css selectors (separate class names and adjust css selectors in JS to clean-up the code)
6. Round numbers to some limited amount of decimal spaces
*/

// VARIABLES

let firstNum = undefined;
let secondNum = undefined;
let operator = '';
let usedCalculate = false;

let display = document.querySelector('input');
let calculate = document.querySelector('.button-equals');
let reset = document.querySelector('.button-reset'); 
let numbers = document.querySelectorAll('.button-number');
let operators = document.querySelectorAll('.button-operator');

// BUTTON EVENTS
reset.addEventListener('click', () => {
     firstNum = undefined;
     secondNum = undefined;
     operator = '';
     usedCalculate = false;
     display.value = '';
})


calculate.addEventListener('click', () => {
    firstNum = display.value;
    display.value = operate(firstNum, operator, secondNum);
    secondNum = display.value;
    usedCalculate = true
    
})

operators.forEach(button => {
    button.addEventListener('click', () => {
        if(secondNum == undefined || usedCalculate == true){
            secondNum = display.value;
            usedCalculate = false;
            operator = button.textContent;
            

        } else {
            firstNum = display.value;
            display.value = operate(firstNum, operator, secondNum);
            secondNum = display.value;
            operator = button.textContent;
            
        }
    })
})

numbers.forEach(number => {
    number.addEventListener('click', () => {
        if(secondNum == display.value){
            display.value = ''
            display.value += number.textContent;
        } else {
            display.value += number.textContent;
        }
        
    })
 });



 // HELPER FUNCTIONS

function add(a,b) {
    return parseInt(a) + parseInt(b);
}

function substract(a,b) {
    return b - a;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return b / a;
}

function operate(a, operator, b) {
 switch(operator) {
    case '+':
        return add(a, b);
    case '-':
       return substract(a, b);
    case '*':
       return multiply(a,b);
    case '/':
       return divide(a,b);
 }
}