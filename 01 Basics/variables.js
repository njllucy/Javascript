//variables
//var , let , const
var x=5;
var x=10; //redeclaring and updating

let a=15;
// let a=20; //error can't re-declare
a=20;//can update value

const b=25;
// b=30; //error can't change
// const b=35; //error can't redeclare and change value

//function scope and block scope
var age=24;
if(true){
    console.log(age);
    var x=5;
    let y=10;
    const z=15;
}
console.log(x); //can access from outside of a block that's why it is called function scope
// console.log(y); //error  can't access from outside of a block that's why it is called block scope
// console.log(z); //error can't access from outside of a block that's why it is called block scope

//Hoisting
//Term undefined [ is a datatype ]
console.log(Msg); //this will print undefined  because we are accessing a variable which is not defined earlier
var Msg="Hello";
console.log(Msg); // Now this will print hello

//if we use let instead of var we won't see the undefined message it will just show an reference error 
console.log(msg); //this will arise an error Uncaught ReferenceError: Cannot access 'msg' before initialization
let msg="Hello";

//if we are using let or const we first should declare it then access





