/*
An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
Objects can describe anything like houses, cars, people, animals, or any other subjects.
 */

//singleton
const newobj=new Object();


//object literals
const mySym = Symbol("key1");

const car = { 
    type: "Fiat",
    model: "500",
    color: "white",
   // [mySym]: "mykey1" // to make symbol use []
    };

//accessing object
console.log(car.type); //dot method
console.log(car["type"]); // square bracket [] method
//console.log(car.mySym);
//console.log(typeof car[mySym]); //string







//run command
//node 04_Objects/01_objects.js