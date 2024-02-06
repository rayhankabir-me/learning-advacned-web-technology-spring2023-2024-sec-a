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
let doubleNumbers: number[] = numbers.map((num: number) => num * 2);
console.log(doubleNumbers);


//introducing OOP
class Student {
    id: number;
    name: string;
    constructor(id:number, name:string) {
        this.name = name;
        this.id = id;
    }

    display():void{
        console.log(`my name is: ${this.name} and my id is: ${this.id}`);
    }

}

let studentOne = new Student(991, "Rayhan");
studentOne.display();


//define Employee Class
class Employee{
    private id: number;
    private name: string;
    protected age: number;
    public isOkay: boolean;

    constructor(id: number, name: string, age: number, isOkay: boolean){
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }

    display(){
        console.log(`ID is: ${this.id}, Name is: ${this.name}, Age is: ${this.age}, isOkay: ${this.isOkay}`);
    }

}

let employeeOne = new Employee(99, "Rayhan", 22, true);
employeeOne.display();






