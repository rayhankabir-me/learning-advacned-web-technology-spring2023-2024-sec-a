let a: number = 60;
console.log(a);

let b: string = "hello world";

console.log(b);

let c: boolean = true;
console.log(c);

function add(a:number, b:number):number{
    return a + b;
}

console.log(add(4,5));


//type alias
type person = {id: number, name: string};

let p: person = {id: 45, name: "Rayhan"};
console.log(p);

let x: number | string;

x = 10;

console.log(x);


let z: "Red" | "Green" | "Yellow";
z = "Red";
console.log(z);


enum Color {Red, Green, Blue};
let color: Color = Color.Green;
console.log(color);

let s = false;
console.log(s);

//accessing array element
let numbers: number[] = [1,2,3,4,5];
let firstElement: number = numbers[0];
console.log(firstElement);


//optonal parameters
function Adding(a:number, b:number, c?:number):number{
    return a + b + (c??0);
}

console.log(Adding(2,3));

//double numbers using map method
let doubleNumbers: number[] = numbers.map(num => num * 2);
console.log(doubleNumbers);






