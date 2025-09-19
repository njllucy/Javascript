/*
Array Methods:
forEach, map, filter, reduce, join.
shift, unshift, pop, push, length.
splice, slice, sort, delete, find, findIndex, every, some.
*/

//1. foreach loop
/* 
The forEach loop in JavaScript is a method available on arrays. It’s used to iterate through each element of an array without needing an index manually.
//syntax
array.forEach(function(element, index, array) {
    // code to execute for each element
});
Parameters:
element → the current element of the array (required)
index → the position of the element in the array (optional)
array → the array being iterated over (optional)

Example 1: Simple use
let numbers = [10, 20, 30, 40];

numbers.forEach(function(num) {
    console.log(num);
});

[1,2,3].forEach(n => console.log(n)); // 1, 2, 3


Example 2: Using arrow function
numbers.forEach(num => console.log(num));

Example 3: Accessing index
numbers.forEach((num, index) => {
    console.log("Index:", index, "Value:", num);
});

Example 4: Print in one line (space separated)
let score = [20, 30, 40, 50, 60];
let output = "";
score.forEach(num => output += num + " ");
console.log(output.trim());

Note : The forEach() loop in JavaScript only works on arrays (and things that behave like arrays, such as NodeList from the DOM).

Note:
forEach cannot be stopped like for with break.
If you need to exit early, use a for loop instead.
Great for simple iteration and clean code.

*/

//objects in array
const actor = [
    {
        name : 'act1',
        payment : 2000
    },
    {
        name:'act2',
        payment : 1000
    },
     {
        name:'act3',
        payment : 3000
    }
];
actor.forEach((actors) =>{
    //console.log(actor);
})


//2. for loop
let score=[20,30,40,50,60];
for(let i=0;i<score.length;i++){
    //console.log(score[i]);
}

//My Qus : how can i print this in one line with spaces ???

//1st way so i have to use join() method for this
//console.log(score.join(" ")); // in this method we don't need loop also

//2nd way
//for loop with process.stdout.write()
for(let i=0;i<score.length;i++){
   // process.stdout.write(score[i]+" "); //works in node.js not in browser console
}

//console.log("\n");//adding new line

//3rd way -> build a string manually
let output=" ";
for(let i=0;i<score.length;i++){
    output+=score[i]+" ";
}
//console.log(output.trim());

for(let i=0;i<actor.length;i++){
   // console.log(actor[i]);
    actor[i].payment -= 10;
   // console.log(actor[i].name," ",actor[i].payment);
}

//3. map() -> Creates a new array by transforming elements
//map method
/*
What is map()?
map() creates a new array by transforming each element of the original array using a function.
The original array is not changed.
*/
let doubled = [1,2,3].map(n => n*2); 
console.log(doubled); // [2,4,6]

//using objects in array
const users = [
    {
        fname : 'nadia',
        lname : 'jahan'
    },
     {
        fname : 'lucy',
        lname : 'fer'
    }
]
const fusers = users.map((user)=>{
    return {
        //fullname : user.fname +" "+ user.lname
        fullname : `${user.fname} ${user.lname}` //another method
    };

});
console.log(fusers);

//4. filter() -> Creates a new array with elements that pass a test.
//filter method -> filter() method in JavaScript is a very useful array method
/*
 What is filter()?
filter() creates a new array with all elements that pass a test (condition) provided by a function.
The original array is not changed.
 */
let evens = [1,2,3,4].filter(n => n%2 === 0); 
console.log(evens); // [2,4]

//using objects in array
const subject=[
    {
        name : 'physics',
        marks : 45
    },
    {
        name : 'math',
        marks : 40
    },
    {
        name : 'english',
        marks : 60
    }
]
const failed = subject.filter((stu)=>{
    return stu.marks < 45;
})
//console.log(failed);

//shorter version of filter method
const fail = subject.filter(stu => stu.marks<45);
console.log(fail);


//5.for..of loop
for(let actors of actor){
   // console.log(actors);

}

//6. Reduce
/*
What is reduce()?

reduce() reduces an array to a single value by applying a function to each element (from left to right).
It is commonly used for sum, product, max, min, flattening arrays, or building objects.
The original array is not changed

//syntax
array.reduce(function(accumulator, currentValue, index, array) {
    // return updated accumulator
}, initialValue);

Parameters:
accumulator → result carried over each iteration (required)
currentValue → current element being processed (required)
index → current index (optional)
array → the array itself (optional)
initialValue → starting value for accumulator (optional but recommended)

*/
let totals = [10,20,30].reduce((acc, n) => acc+n, 0); 
console.log(totals); // 60

const movies =[
    {
       name : "interstellar",
       budget : 100 
    },
     {
       name : "facebook",
       budget : 200 
    },
     {
       name : "matrix",
       budget : 150 
    }
];

// let total=0;
// movies.forEach((mov)=>{
//     total += mov.budget;
// });
// console.log(total);

//to short this too long code we will use reduce method
const total = movies.reduce((acc,mov)=>{
    acc += mov.budget;
    return acc;
},0)
console.log(total);

//more shorter
let sum = movies.reduce((acc,mov) => acc+mov.budget,0);
console.log(sum);

//7. indexOf method
const admins =[2,3,4];
const us_er ={
    name : 'xyz',
    id : 5
}
console.log(admins.indexOf(us_er.id)); //-1 cuz it's not present

//8. includes method
//syntax -> array.includes(value, startIndex)
/*
let fruits = ["apple", "banana", "mango", "orange"];

console.log(fruits.includes("banana", 2)); // false cuz it will find from index 2
console.log(fruits.includes("banana", 0)); // true

*/
console.log(admins.includes(us_er.id));

//9. find method
let numss=[5,12,8];
console.log(numss.find(n=>n>10)); // 12

const userss=[
    {
        name :'xx',
        id:1
    },
     {
        name :'xy',
        id:2
    },
     {
        name :'xz',
        id:3
    }
]
const myuser = userss.find((user)=>{
    return user.id === 3;
})
console.log(myuser);

//10. sort method
const names =[ 'nadia','jahan','lucy','etu','naima'];
console.log(names.sort());

//11. splice method
//splice(start, deleteCount, ...items) → Add/remove items (changes array).
let arrr=[1,2,3,4];
arrr.splice(1,2,"x"); 
console.log(arrr); // [1,"x",4]


const namess=['nadia','jahan','lucy','etu','naima'];
namess.splice(1,1);
console.log(namess);

//12.join() → Joins elements into a string.
let str = ["Hello","World"].join(" "); 
console.log(str); // "Hello World"

//13.Cutting & Splicing
//slice(start, end) → Copy part of array (non-destructive).
let arr=[1,2,3,4]; console.log(arr.slice(1,3)); // [2,3]


//14.sort() → Sorts array (default = strings).
let nums=[40,1,5];
nums.sort((a,b)=>a-b); // [1,5,40]

//15.delete → Removes element but leaves empty slot (undefined).
let array=[1,2,3]; delete array[1]; 
console.log(array); // [1, empty, 3]

//16.findIndex() → Returns index of first element matching condition.
let num=[5,12,8];
console.log(num.findIndex(n=>n>10)); // 1

//17.Checking
//every() → Returns true if all elements pass condition.
console.log([2,4,6].every(n=>n%2===0)); // true

//18.some() → Returns true if at least one element passes condition.
console.log([1,3,4].some(n=>n%2===0)); // true


