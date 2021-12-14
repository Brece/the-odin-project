const items = document.querySelectorAll(".c-calc__wrapper__number__item");
const operators = document.querySelectorAll(".c-calc__wrapper__operator__item");
const decimal = document.querySelector(".c-calc__wrapper__number__decimal");
const backspace = document.querySelector(".c-calc__wrapper__number__backspace");
const clear = document.querySelector(".c-calc__wrapper__number__clear");
const equals = document.querySelector(".c-calc__wrapper__number__equals");
const display = document.querySelector(".c-calc__display");
const textOperator = document.querySelector("#operator");
const textValue1 = document.querySelector("#value1");
const textValue2 = document.querySelector("#value2");

let value = "";
let calculation = {};
let result = 0;
let counterEqual = 0;
let counterDecimal = 0;
let counterBackspace = 0;

items.forEach(function(item) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        value += e.target.dataset.item;
        display.innerHTML = value;
    });
});

decimal.addEventListener("click", function(e) {
    e.preventDefault();
    if(!counterDecimal && !value.includes(".")) {
        value += e.target.dataset.item;
        display.innerHTML = value;
        counterDecimal = 1;
    }
});

backspace.addEventListener("click", function(e) {
    e.preventDefault();
    if(!counterBackspace) {
        value = value.slice(0, -1);
        display.innerHTML = value;
    }
    
    if(!value.includes(".")) {
        counterDecimal = 0;
    }
})

operators.forEach(function(operator) {
    operator.addEventListener("click", function(e) {
        e.preventDefault();
        let operator = e.target.dataset.operator;

        if(!(calculation["currentResult"])) {
            calculation["currentResult"] = Number(value);
            result = calculation["currentResult"];
        } else {
            calculation["value"] = Number(value);
            display.innerHTML = operate(calculation["operator"], calculation["currentResult"], calculation["value"]);
            textValue2.innerHTML = value;

            calculation["currentResult"] = result;
        }

        calculation["operator"] = operator;
        textValue1.innerHTML = result;
        textOperator.innerHTML = operator;
        value = "";
        counterDecimal = 0;
    });
});

equals.addEventListener("click", function() {
    calculation["value"] = Number(value);
    textValue2.innerHTML = value;

    if(!counterEqual) {
        if(calculation["operator"] && calculation["value"]) {
            display.innerHTML = operate(calculation["operator"], result, calculation["value"]);

        } else {
        alert("Please press 'Clear' and enter a number to calculate first, don't divide with '0'!")
        }
    }

    counterEqual = 1;
    counterDecimal = 1;
    counterBackspace = 1;
});

clear.addEventListener("click", function() {
    value = "";
    calculation = {};
    textValue1.innerHTML = "";
    textValue2.innerHTML = "";
    textOperator.innerHTML = "";
    display.innerHTML = "";
    result = 0;
    counterEqual = 0;
    counterDecimal = 0;
    counterBackspace = 0;
})

function add(a, b) {
    result = a + b;
};

function substract(a, b) {
    result = a - b;
};

function multiply(a, b) {
    result = a * b;
};

function divide(a, b) {
    result = a / b;
};

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            add(a, b);
            break;
        case "substract":
            substract(a, b);
            break;
        case "multiply":
            multiply(a, b);
            break;
        case "divide":
            divide(a, b);
            break;
    }
    return result.toFixed(3);
};