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
