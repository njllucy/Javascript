//String Methods: length, toUpperCase(), toLowerCase(), slice(), replace(), concat(), trim(), includes().

//getting the string length
const str = "I am sad";
console.log(str.length); //8

//toUpperCase()
let name = 'nadia';
console.log(name.toUpperCase());
console.log(name[0]);//accessing characters

//toLowerCase()
let namee = 'Nadia';
console.log(namee.toLowerCase());

//to access the last character we can use .length-1
console.log(name[name.length-1])//a

//slice()
//slice(start,end) -> extracts part of a string
let text = "javascript";
console.log(text.slice(2,4)); // 2 to 4-1=3 cuz o base indexed
console.log(text.slice(-4)); //negative index -> from end
console.log(text.slice(-4,-1)); //not including end index


//replace(old,new)  -> replaces first match
let txt = "I am sad,He is sad";
console.log(txt.replace("sad","very sad"));

const url="https://nadia/jahan%20lucy";
console.log(url.replace("%20","_")); //it doesn't change original string
console.log(url.includes('_')); //false

//To replace all matches, use regex:
console.log(txt.replace(/sad/g,"happy"));


//concat() -> joins strings
let str1 = "hello";
let str2="javascript";
console.log(str1.concat(" ",str2));

//trim() -> removes whitespaces from the start & end not inside the text
let msg = " 404-not found ";
console.log(msg); // prints with spaces 
console.log(msg.trim()); //prints without spaces 

//includes(substring) -> checks if string exists
console.log(msg.includes(" ")); //true cuz space exist
console.log(msg.includes("not"));//true
console.log(msg.includes("sad"));//false

//to check which character is present in given position
console.log(msg.charAt(5));

//to check character position
console.log(msg.indexOf('t')); //returns first appeared index

//substring(start,end)
console.log(msg.substring(1,3));

//slipt() -> converts to array
//string.split(separator, limit)
const urls="https://nadia/jahan%20lucy";
console.log(urls.split('/'));

//startsWith()
//string.startsWith(searchString, position)
/*
searchString → the text to search for.
position (optional) → the index to start checking from (default = 0).
*/
let textt = "JavaScript is fun";

console.log(textt.startsWith("Java"));   // true
console.log(textt.startsWith("Script")); // false
console.log(textt.startsWith("Script", 4)); // true (starts from index 4)

//endsWith() -> Checks if a string ends with a specific substring.
/*
string.endsWith(searchString, length)
searchString → the text to check at the end.
length (optional) → treat the string as if it has this length.
*/
let message = "JavaScript is fun";

console.log(message.endsWith("fun"));    // true
console.log(message.endsWith("Script")); // false
console.log(message.endsWith("Java", 4)); // true (checks first 4 chars "Java")


//run command 
//node 01_Basics/10_string_methods.js