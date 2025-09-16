//Total 9 main types

//1)Primitive Datatypes
//1.1 Number 
let age = 25;
let temp=-25;
let price=50.40;
//1.2 string
let name="Nadia";
//1.3 Boolean [we have two values true or false]
let isloggedIn = true;
let hasPermission = false;
//1.4 undefined [ is a datatype ]
console.log(Msg); //this will print undefined because we are accessing a variable which is not defined earlier
var Msg="Hello";
console.log(Msg); // Now this will print hello

//1.5 BigInt [ we have MAX_SAFE_INTEGER(9007199254740991 -> limit for safe operation {in mathematically = (2**53)-1 = 9007199254740991 } ]
// so to break this limit we can use BigInt for larger number that MAX_SAFE_INTEGER
//The bigint type represents the whole numbers that are larger than 253 – 1. 
// To form a bigint literal number, you append the letter n at the end of the number:
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'

//1.6 Symbol -> Unique
//we can use unique as a key
let s1 = Symbol();
console.log(s1);
let s = Symbol('foo');
console.log(s);

//2)Structural Types
  //2.1 Object  
let emptyObject = {};
let person = {
    name: 'Nadia',
    age: 25,        
}
console.log(person); //accessing object
console.log(person.name); //accessing name property of object
//Object can hold another object
let student = {
    name : 'Nadia',
    age : 23,
    marks : {
        math: 50,
        physics: 60
    }
}
console.log(student.marks.physics); //accessing nested object property
   //2.1.1 Function
   //Non-data structure
   //callable
//2.2 Arrays -> collectipn of values
const number = [2,3,'js','python',true,{name:'Nadia', age:25}]; // we can store multiple types of data in an array
console.log(number);//accessing whole array
console.log(number[4]); //accessing 4th index value of array
//2.3 Maps
//2.4 Sets
//2.5 Date

//3)Structural root
//3.1 null -> null is a special value that represents "no value" or "empty value".
// It is often used to indicate the absence of an object or a non-existent reference.
let emptyValue = null;
console.log(emptyValue); //null

//To determine the current type of the value stored in a variable, you use the typeof operator:
console.log(typeof age); //number
console.log(typeof name); //string





  
