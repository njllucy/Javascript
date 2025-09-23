//1.Normal function

function printName(){
    console.log("javascript");
}
printName();

//2.Function Expression
//Store function in avariable

const greet = function(name){
    console.log(`Hello ${name}`);
}
greet('javascript');

//3.Arrow Function ( ES6 )
const greetings = (name) => "Learning " + name;

console.log(greetings("javascript"));


//4.Anonymous Function
//A function without a name (often used in callbacks).
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);


//5. Immediately Invoked Function Expression (IIFE)
//Runs immediately after defining
(function() {
  console.log("IIFE executed!"); // this will be printed before 4 th one
})();

//6. Default Parameters

function msg(name = "Guest") {
  return "Wanna say " + name;
}

console.log(msg());        // Hello Guest
console.log(msg("Goodbye")); // Wanna say Goodbye

//7. Rest Parameters
//Accept multiple arguments as an array.

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(10, 20, 30)); // 60

//8.Higher-Order Functions (HOF)
//A function that takes another function as an argument or returns a function.
function apply(fn, x, y) {
  return fn(x, y);
}
console.log(apply((a, b) => a * b, 3, 4)); // 12

//9. Closures
//Functions can "remember" variables from their outer scope.
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

//10.Function Hoisting
//Function declarations are hoisted (can call before definition).
//Function expressions and arrow functions are not hoisted.

sayHello(); // Works
function sayHello() { console.log("Hello"); }

// greet(); // Error
const greets = () => console.log("Hi");


//Syntax
/*

Declaration → function name() {}

Expression → const name = function() {}

Arrow → const name = () => {}

IIFE → (function(){})()

Special → Default + Rest params

*/

//this in Functions
//Normal functions → this depends on how the function is called.
//Arrow functions → this is taken from the surrounding scope (lexical this).

