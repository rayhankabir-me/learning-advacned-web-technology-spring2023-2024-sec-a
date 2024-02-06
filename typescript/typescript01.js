var a = 60;
console.log(a);
var b = "hello world";
console.log(b);
var c = true;
console.log(c);
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
var p = { id: 45, name: "Rayhan" };
console.log(p);
var x;
x = 10;
console.log(x);
var z;
z = "Red";
console.log(z);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Green;
console.log(color);
var s = false;
console.log(s);
//accessing array element
var numbers = [1, 2, 3, 4, 5];
var firstElement = numbers[0];
console.log(firstElement);
//optonal parameters
function Adding(a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0);
}
console.log(Adding(2, 3));
//double numbers using map method
var doubleNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubleNumbers);
//introducing OOP
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.name = name;
        this.id = id;
    }
    Student.prototype.display = function () {
        console.log("my name is: ".concat(this.name, " and my id is: ").concat(this.id));
    };
    return Student;
}());
var studentOne = new Student(991, "Rayhan");
studentOne.display();
//define Employee Class
var Employee = /** @class */ (function () {
    function Employee(id, name, age, isOkay) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.isOkay = isOkay;
    }
    Employee.prototype.display = function () {
        console.log("ID is: ".concat(this.id, ", Name is: ").concat(this.name, ", Age is: ").concat(this.age, ", isOkay: ").concat(this.isOkay));
    };
    return Employee;
}());
var employeeOne = new Employee(99, "Rayhan", 22, true);
employeeOne.display();
