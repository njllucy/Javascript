/*
Basic Syntax :

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;


*/

/*
Arrow functions were introduced in ES6.
Arrow functions allows a shorter syntax for function expressions.
We don't need the function keyword, the return keyword, and the curly brackets:
*/
let myFunction = (a, b) => a * b;
//console.log(myFunction(2,3));//6
/*
❗Note :
Arrow functions do not have their own this. They are not well suited for defining object methods.
Arrow functions are not hoisted. They must be defined before they are used.
*/

//Implicit Vs Explicit Return
//Explicit return -> We use curly braces {} and explicitly write return.
//Here you must use return because curly braces mean you are writing a block of code.
const multiply = (a, b) => {
  return a * b;
};
//console.log(multiply(4,5));

//Implicit Return -> If the function body has only one expression, you can omit {} and return
const add = (a, b) => a + b;
//console.log(add(2, 3)); // 5

/*
❗Note:
If you want to return an object with implicit return, wrap it in parentheses () (otherwise {} is treated as a block).
*/
const makeUser = (name, age) => ({ name, age });
//console.log(makeUser("Nadia", 21));
// { name: 'Nadia', age: 21 }

//🚨QUS : when to use which one ???
/*
Use explicit return when you need multiple lines of logic.
Use implicit return for one-liners.
*/

//Arrow Function Shortcuts
//1.If only 1 parameter, parentheses () are optional
//2.If 0 or more than 1 parameter, must use ()

//Key Differences from Normal Functions
//this Binding
/*
Normal functions: this depends on how the function is called.

Arrow functions: this is lexically bound (inherits from surrounding scope)

🚨QUS : what is meant by lexically bound ???
Lexical means "based on where it is written in the code."
When we say arrow functions have lexically bound this, it means:
An arrow function does not create its own this.
Instead, it inherits this from the surrounding scope (the place where it was defined).

*/
function Person() {
  this.age = 20;

  setInterval(function() {
    this.age++; // here `this` is global/window, not Person
  }, 1000);
}

function PersonArrow() {
  this.age = 20;

  setInterval(() => {
    this.age++; // arrow uses lexical this → PersonArrow object
  }, 1000);
}

//arguements object
/*
Normal functions: have their own arguments.

Arrow functions: do not have arguments. You must use rest parameters (...args).
*/
function normal() {
 // console.log(arguments); // works
}
normal(1,2,3);
const arrow = () => {
  //console.log(arguments); // ReferenceError
};
arrow(4,5,6);
const arrowFixed = (...args) => {
 // console.log(args); // works
};
arrowFixed(7,8,9);

//constructors
/*
Normal functions can be used as constructors (new MyFunc()).
Arrow functions cannot be constructors.
*/

//🚨QUS : When to use Arrow Functions ???
/*
✅Best for:
Short functions / one-liners
Callbacks (map, filter, forEach)
When you want lexical this

❌ Avoid when:
You need your own this (object methods, constructors)
You need arguments
*/


const user ={
    username : 'nadia',
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username},Welcome to the site`);
        //console.log(this);
    }
}

//user.welcomeMessage();
// user.username="Lucy";
// user.welcomeMessage();
//console.log(this);


//More about this keyword
//Different context of this
//Global context
console.log(this); 
// Browser: window object
// Node.js: {} (empty object)

//call(),apply(),bind()

/*
call()
Function executes immediately
Syntax: func.call(thisArg, arg1, arg2, ...)
*/
function greet(city) {
    console.log(`${this.name} from ${city}`);
}

const person = { name: "Lucy",age:21 };
greet.call(person, "Chittagong"); // Lucy from Chittagong

/*
apply()
Same as call(), but arguments passes as na array
Syntax: func.apply(thisArg, [arg1, arg2, ...])
*/
greet.apply(person, ["Chittagong"]); 

/*
bind()
Function return new function,we can call it later
Syntax: const newFunc = func.bind(thisArg, arg1, ...)
*/
const greetAlice = greet.bind(person, "Sylhet");
greetAlice(); 

//Using bind() with multiple arguments
function introduce(city, country) {
    console.log(`${this.name}, age ${this.age}, from ${city}, ${country}`);
}

const persons = { name: "Tom", age: 25 };
const introTom = introduce.bind(persons, "Chittagong", "Bangladesh");

introTom(); // Tom, age 25, from Chittagong, Bangladesh

/*
💡 Tip (English):
An arrow function never has its own this.
Using bind(), you can assign a permanent this to a function.
*/
