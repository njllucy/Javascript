/*
To avoid repeating the same code all over places,we can use a function to wrap that code and reuse it.
 */

//Declaring a function
/*
//Syntax
function functionName(parameters){
    // function body
    // ...
}

The function name must be a valid JavaScript identifier. By convention, the function names are in camelCase and start with verbs like getData(), fetchContents(), and isValid().
*/

//To call a function, you use its name followed by arguments enclosed in parentheses like this:
//functionName(arguments);
//Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value
//To specify a return value for a function, you use the return statement followed by an expression or a value
//return expression;
function say(message) {
  console.log(message);
}
say("Hello JS");

//The arguments object
//inside a function, you can access an object called arguments that represents the named arguments of the function.
//so we can pass value by arguements but do not need to receive by parameters
//Example
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
   // console.log(arguments);
  }
  return sum;
}
console.log(add(1, 2, 3, 4, 5)); // 15


/*
Modern Alternative → Rest parameters
Instead of arguments, modern JS uses rest parameters (...args), which gives a real array.
*/
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//Note
/*
arguments = old, array-like, function-scope only
...args = modern, real array, works with arrow functions too
 */

