const numbers = [1,2,3,4,5,6];
const fruits = ["orange", "banana", "apple"];
const mixedArray = [2, 'two', {name: "Rayhan"}, [7,8,9]];

console.log("printing the numbers: " + numbers);
console.log("printing the fruits: " + fruits);
console.log(mixedArray[2]);

console.log("using pop()------");
numbers.pop();
console.log(numbers);
console.log('using push()----------');
numbers.push(7);
console.log(numbers);
console.log('using shift()------');
numbers.shift();
console.log(numbers);
console.log('using unshift()------------------');
numbers.unshift(9);
console.log(numbers);


console.log('foreach method------');
numbers.forEach(function(value){
    console.log(value);
})

console.log('using map() method-------');
numbers.map(function(value){
    console.log(value * 2);
});

console.log('using filter() method---------');

const newArray = numbers.filter(function(value){
    return value === 2;

});

console.log(newArray);
