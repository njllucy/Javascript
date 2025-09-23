
/*
strings are primitive values and are immutable. This means that modifying a string always results in a new string, leaving the original string unchanged.
*/

//creating string
const name = "lucy";

//ES6 introduced template literals that allow you to define a string backtick (`) characters:
//What is template literals ?
/*
To address more complex problems, ES6 introduced template literals, providing a safer and cleaner way to work with strings.
In ES6, you create a template literal by wrapping your text in backticks (`) as follows:
*/
const test = `place your text`;

//If a string contains a backtick, you must escape it using a backslash (\) :
let strWithBacktick = `Template literals use backticks \` insead of quotes`;

//Multiline strings 
/*Before ES6, you use the following technique to create a multi-line string by manually including the newline character ( \n) in the string as follows:
*/
let msg = 'Multiline \n\
string';
console.log(msg);
//Note that the backslash ( \) placed after the newline character ( \n) indicates the continuation of the string rather than a new line.

//We can place variable also inside a template literal
let age=24;
console.log(`my age is ${age}`);

//Escaping special characters
/*
To escape special characters, you use the backslash \ character. For example:
Windows line break: '\r\n'
Unix line break: '\n'
Tab: '\t'
Backslash '\'
*/

console.log("Hy\r\nI am learning strings in js");
console.log("Hy\nI am learning strings in js");
console.log("Hy\tI am learning strings in js");
console.log("Hy\ I am learning strings in js");
console.log('I\'m a string!');