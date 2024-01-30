function greet(value){
    console.log(`hello ${value}`);
}

greet("rayhan");

function sum(a, b){
    return a + b;
}

let result = sum(2,5);
console.log(result);

let hello = (value) => console.log(`hello ${value}`);
hello("Mrittika");

console.log('annonymous function-------');

let hi = function(value){
    console.log(`hello ${value}`);
}
hi("rayhan");


console.log('passing functions as parameter-----------');
function operateNumbers(a, b, operator){
    return operator(a, b);
}

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

let addingNumber = operateNumbers(4, 5, add);
console.log(addingNumber);
let multiplyNumber = operateNumbers(4, 5, multiply);
console.log(multiplyNumber);