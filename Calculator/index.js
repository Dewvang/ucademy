let num1;
let num2;

function cal(num1,num2,operation){
    return operation(num1, num2);
}

function add(num1, num2){
    console.log(num1+num2);
}

function subtract(num1, num2){
    console.log(num1-num2);
}

function multiply(num1, num2){
    console.log(num1*num2);
}

function divide(num1, num2){
    console.log(num1/num2);
}

cal(20,4,add)