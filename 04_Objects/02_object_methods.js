//Object Methods: Object.keys(), Object.values(), Object.entries().

//1. Object.keys(obj)
//Returns an array of the object’s keys (property names).

let user1 = { name: "Nadia", age: 21 };
console.log(Object.keys(user1)); 
// ["name", "age"]

// 2. Object.values(obj)
//Returns an array of the object’s values.

let user2 = { name: "Nadia", age: 21 };
console.log(Object.values(user2)); 
// ["Nadia", 21]

//3. Object.entries(obj)
//Returns an array of [key, value] pairs.

let user3 = { name: "Nadia", age: 21 };
console.log(Object.entries(user3)); 
// [["name", "Nadia"], ["age", 21]]

//Using with for...of
let user = { name: "Nadia", age: 21 };
for (let [key, value] of Object.entries(user)) {
  console.log(key, ":", value);
}
// name : Nadia
// age : 21


//Note
/*
Object.keys(obj) → array of keys

Object.values(obj) → array of values

Object.entries(obj) → array of key-value pairs
*/

//Modern / Extra Useful Methods
//4. Object.assign(target, source) -> Copies properties from one object to another (used for merging).
let a = { x: 1 };
let b = { y: 2 };
let merged = Object.assign({}, a, b);
console.log(merged); // { x: 1, y: 2 }

//5. Object.freeze(obj)
//Makes object immutable (cannot add/remove/change).
let car = { brand: "Tesla" };
Object.freeze(car);
car.brand = "BMW"; //no effect
console.log(car); // { brand: "Tesla" }

//6. Object.seal(obj)
//Prevents adding/removing properties but allows modifying existing ones
let book = { title: "JS Guide" };
Object.seal(book);
book.title = "Advanced JS"; // allowed
book.author = "Nadia"; // cannot add
console.log(book); // { title: "Advanced JS" }

//7. Object.hasOwn(obj, prop)  (ES2022)
//Checks if the object has a property (own property, not inherited).
let person = { name: "Nadia" };
console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "age"));  // false

//8.Object.getOwnPropertyNames(obj)
//Returns an array of all property names, even non-enumerable ones
let obj = { a: 1 };
Object.defineProperty(obj, "hidden", { value: 42, enumerable: false });
console.log(Object.getOwnPropertyNames(obj)); // ["a", "hidden"]

//9. Object.fromEntries(array)
//Converts array of [key, value] pairs back into an object.

let arr = [["name", "Nadia"], ["age", 21]];
console.log(Object.fromEntries(arr)); 
// { name: "Nadia", age: 21 }

/*
| Method                         | Use                              |
| ------------------------------ | -------------------------------- |
| `Object.keys()`                | Get keys                         |
| `Object.values()`              | Get values                       |
| `Object.entries()`             | Get `[key, value]` pairs         |
| `Object.assign()`              | Copy/merge objects               |
| `Object.freeze()`              | Make object fully immutable      |
| `Object.seal()`                | Prevent add/remove, allow modify |
| `Object.hasOwn()`              | Check if property exists (own)   |
| `Object.getOwnPropertyNames()` | Get all property names           |
| `Object.fromEntries()`         | Convert array → object           |

*/
