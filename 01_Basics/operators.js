"use strict"; //it will check for errors

/*

1.Assignment operators
2.Comparison operators
3.Arithmetic operators
4.Bitwise operators
5.Logical operators
6.String operators
7.Conditional (ternery) operator
8.Comma operator
9.Unary operators
10.Relational operators

*/

//Assignment operator
let x=10;
let y;
y=x; //assignment operation
console.log(y);

//compound operators
let z=20;
let k=30;
z += k;
z -= k;
z *= k;
z /= k;
console.log(z);

//Arithmetic operators
let a=10;
let b=20;
a++;//increment
b++;
a--;//decrement
b--;
console.log(a);
//a **= 2; //power of 2 (a^2 = 10^2 ) we can do like this
console.log(a ** 2); // or like this 

//Logical operators -> logical operators evaluated left to right
//1.Logical AND &&
let sad = true && true; //it will return true 
console.log(sad); // true

// const isLoggedIn=true;
// const hasPermissions = false;
// if(isLoggedIn && hasPermissions){ //will return true if both has true
//     console.log("deleted successfully");
// }else{
// console.log("Invalid credentials");
// }

//2.Logical OR ||
const happy = true || false; // will return true if one of true is found
if(happy){
    console.log(happy)
}
const isLoggedIn=true;
const hasPermissions = false;
if(isLoggedIn || hasPermissions){ //will return true if one has true
    console.log("deleted successfully");
}else{
console.log("Invalid credentials");
}

//3.Logical NOT ! negate the statement
const alive=true;
console.log(!alive); //false 

const animal='cat';
console.log(!animal); //false

//Conditional operators (Ternery operators)

const userRole = 'admin';

if(userRole === 'admin'){ /// === is for exact match
    //statement
    console.log('You are an admin')
}else{
    //statement
    console.log('You are not an admin')

}
//now we can convert this into ternery operator
//condition ? '' : '';
userRole === 'admin' ? console.log('You are an admin') : console.log('You are not an admin');

//Comparison operators
//eqal to ==
//not equal to !=
//strict equal to ===
//strict not equal to !==
//greater than >
//less than <
//greater than or equal to >=
//less than or equal to <=

console.log(5 == '5'); //true
console.log(5 === '5'); //false
console.log(5 != '5'); //false
console.log(5 !== '5'); //true
console.log(5 > 3); //true
console.log(5 < 3); //false
console.log(5 >= 5); //true
console.log(5 <= 3); //false

//in js data conversion is called type coercion


console.log(3>2 && 2>1); //true
console.log(3>2 || 2>1); //true
console.log(true && 3>2); //true
console.log(3>2>1); //true



