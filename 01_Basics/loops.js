//In JavaScript, loops are mainly of 5 types.
//1.for loop Use: When you know the number of iterations.
/*
for (initialization; condition; increment/decrement) {
    // code to run
}
*/
for (let i = 0; i < 5; i++) {
  console.log(i); 
}
// 0 1 2 3 4

//2.while loop Use: When you don’t know the exact number of iterations. Loops while a condition is true.
/*
while (condition) {
    // code to run
}
 */
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


//3.do...while loop Use: Same as while, but runs at least once even if the condition is false.
/*
do {
    // code to run
} while (condition);
*/
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
// 0 1 2 3 4


//4. for...in loop Use: To loop through object properties.
/* 
for (let key in object) {
    // code to run
}
*/
let user = { name: "Nadia", age: 21 };

for (let key in user) {
  console.log(key, user[key]);
}
// name Nadia
// age 21


//5. for...of loop Use: To loop through iterable objects like arrays, strings, etc.
/*
for (let value of iterable) {
    // code to run
}
*/
let numbers = [10, 20, 30];
for (let num of numbers) {
  console.log(num);
}
// 10 20 30


//Note
/*

for...of → values (arrays, strings, etc.).

for...in → keys (objects).

*/