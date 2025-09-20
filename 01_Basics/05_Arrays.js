//Arrays 
//an array is an ordered list of values. Each value is called an element specified by an index
//Characteristics
//1.an array can hold values of mixed types -> number,string,boolean,null
//2.the size of an array is dynamic and auto growing.we don't need to specify the array size

//creating array is js -> we have to ways
//1.By using array constructor
//let score= new Array();
let score= new Array(10); //if we want to specify size
//Now the qus is why using new ?
//ANS : In JavaScript, new is used to create an object instance from a constructor function.This explicitly calls the Array constructor.
//Array, Object, Date, Function, Student (custom constructor), class instance → These are constructors, so we need new.
//Literals ([], {}, function() {}, etc.) → These are not constructors, so we don’t need new.
//so if we are using constructor we need new to call that constructor without constructor we just use it by literals.
//The array literal form uses the square brackets [] to wrap a comma-separated list of elements.

const languages = ['Javascript','C++','Python'];

//Accessing JavaScript array elements -> Arrays are zero based indexed.It starts at index 0 upto length()-1.
//To acces an element from an array we have to specify the index in the square brackets[].

console.log(languages[1]); //accessing 1st index element this will print C++.

//length
console.log(languages.length); // 3

//Basic operations on array

//1.to update
languages[2]='Go'; // Go will replace Python
console.log(languages[2]); // Go

//2.apeending an element to an array
languages.push('C'); //this will append the size of the array to 3 to 4 and add 'C' at the end.

console.log(languages); //[ 'Javascript', 'C++', 'Go', 'C' ]

//3.adding an element to the beginning of an array
languages.unshift('dart'); //this will add the element in front of the array
console.log(languages); //[ 'dart', 'Javascript', 'C++', 'Go', 'C' ]

//4.removing an element from the end of an array -> pop() method
languages.pop(); //this will remove 'C' from the array
console.log(languages);//[ 'dart', 'Javascript', 'C++', 'Go' ]

//5.removing an element from the beginning of an array -> shift() method
languages.shift();//this will remove 'dart' from the array
console.log(languages);//[ 'Javascript', 'C++', 'Go' ]

console.log(languages.shift()); // this method will print the removed item only 

languages.push('Python','C#','Java');

//QUS : how can i add and remove element at a specific index ?
console.log(languages);
//1.Using splice() method
//splice(index_no,number_of_elements to remove)
languages.splice(1,2) // remove 2 element from index 1
console.log(languages);

//languages.push('Python','C#','Java');


//2.Using filter() method
//array.filter(callback(element, index, array), thisArg)
//Parameters
/*
callback → A function that runs for every element.

element → current element

index → index of the current element

array → the whole array

thisArg (optional) → value to use as this inside the callback.
*/
let numbers = [10, 25, 30, 45, 50];
let res=numbers.filter(num => num > 30); //Shorter version with arrow function
console.log(res);

//Best practice: Use splice() if you want to modify the original array,or filter() if you want a new array without that element.

//Finding an index of an element in the array -> indexOf() method

let index=languages.indexOf('C++');
 console.log(index);

 //Check if a value is an array
 console.log(Array.isArray(languages)); //true






