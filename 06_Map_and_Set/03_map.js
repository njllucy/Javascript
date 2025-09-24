/*
A Map is a collection of key-value pairs.
Unlike objects, any type of value can be used as a key (not just strings or symbols).
Keys maintain insertion order.
A Map also remembers the original insertion order of the keys.
*/

//Creating a Map
//1) Passing an Array to new Map()
//2) Create a Map and use Map.set()

//The new Map() method
const fruits = new Map([
    ['apples',300],
    ['oranges',400],
    ['kiwis',500]
]);

console.log(typeof fruits);

//printing elements
//console.log(fruits);

//printitng values one by one
for(let val of fruits){
   // console.log(val);
}

//Printing only values
for(let val of fruits.values()){
    //console.log(val);
}

//Printing only keys
for(let val of fruits.keys()){
    //console.log(val);
}

//with [key,value] in for..of
for (let [key, value] of fruits) {
  //console.log(value);
}


//The set() Method
//We can add elements to a Map with the set() method

const student = new Map();
student.set('Name','Nadia');
student.set('Dept','CSE');
//console.log(student);

//The get() method
//The get method gets the value of a key in a map
console.log(student.get('Name'));

