//sync
var a = ("hania");
var b = ("18");
var c = ("karachi");
console.log("her name is ".concat(a, " and shes is ").concat(b, " years and belongs to ").concat(c));
//aSyn
console.log('my data');
console.log('its all');
setTimeout(function () {
    console.log('hi, my name is hania');
}, 2000);
//callbackhell
setTimeout(function () {
    console.log('him to her');
    setTimeout(function () {
        console.log('her to him');
    }, 1000);
    setTimeout(function () {
        console.log('them to eachother');
    }, 3000);
}, 2000);
//callback
function greet(name) {
    console.log('hello,' + name);
}
function processUserInput(callback) {
    var name = 'Alice';
    callback(name);
}
processUserInput(greet); //...
function numbers(a, b) {
    console.log(a + b);
}
function numbs(callback) {
    var number1 = 12;
    var number2 = 3;
    callback(number1, number2);
}
numbs(numbers); //...
function names(name, age) {
    console.log("hi my name is ".concat(name, " and my age is ").concat(age));
}
function myname(callback) {
    var name = "hania";
    var age = 18;
    callback(name, age);
}
myname(names); //...
function cases(name) {
    console.log(name.toLowerCase());
}
function call(callback) {
    var name = "hania";
    callback(name);
}
call(cases); //...
function doublenumbers(numbers) {
    var dubnum = numbers.map(function (num) { return num * 2; });
    console.log(dubnum);
}
function double(callback) {
    var numbers = [1, 2, 3, 4, 5];
    callback(numbers);
}
double(doublenumbers); //...
function minus2(a, b) {
    console.log(a - b);
}
function minuscall(callback) {
    var num1 = 6;
    var num2 = 5;
    callback(num1, num2);
}
minuscall(minus2); //...
//using set time out 
function minus(a, b) {
    console.log(a - b);
}
setTimeout(function () {
    var num1 = 6;
    var num2 = 5;
    minus(num1, num2);
}, 2000); //...
//plus with setTimeout
function plus(a, b) {
    console.log(a + b);
}
setTimeout(function () {
    var num1 = 5;
    var num2 = 2;
    plus(num1, num2);
}, 2000); //...
