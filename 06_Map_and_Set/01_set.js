/*
A JavaScript Set is a collection of unique values.
Stores unique values (no duplicates).
Order is insertion order.
The values can be of any type, primitive values or objects.
*/

//create a Set
/* 
we can create a JavaScript Set by:
1)Passing an array to new Set()
2)Create an empty Set and use add() to add values
*/
//The new Set() method -> Pass an array to the new Set() constructor:

//Example of Set with initialization
const letters = new Set(['a','b','d','z']);

//Creating a Set & adding values
const names=new Set();
//add values to the Set
names.add('Nadia');
names.add('Etu');
names.add('Naima');

//Creating a Set & adding variables
const score = new Set();
const x = 50;
const y = 100;
const z = 80;

//add variables to the Set
score.add(x);
score.add(y);
score.add(z);

//printing the elements 
// method : 1 -> we can use for..of loop
for ( let val of names){
    console.log(val);
}

//method : 2 - using forEach
score.forEach(num => console.log(num));

//method : 3 -> Convert to array & print
console.log([...names]);

//Sets are Objects
console.log(typeof score); //object

//instanceof Set returns true
//instanceof checks if an object was created from a constructor function/class or inherits from it in its prototype chain.
console.log(names instanceof Set); //true
