/*

Map Methods

new Map() → creates a new Map.

set(key, value) → adds or updates a key-value pair.

get(key) → returns the value for a given key.

has(key) → checks if a key exists.

delete(key) → removes a key-value pair.

clear() → removes all key-value pairs.

keys() → returns an iterator with all keys.

values() → returns an iterator with all values.

entries() → returns an iterator with [key, value] pairs.

forEach(callback) → runs a function for each [key, value] pair.

*/

//1 ) new Map() -> creates a new map
const subjects = new Map();

//2)set(key, value) → adds or updates a key-value pair.
//3)get(key) → returns the value for a given key.
const myMap = new Map();
myMap.set('country', 'Bangladesh');
console.log(myMap.get('country')); // Bangladesh

//4) .has(key)
//The new Map() method
const fruits = new Map([
    ['apples',300],
    ['oranges',400],
    ['kiwis',500]
]);
console.log(fruits.has('apples')); //true
console.log(fruits.has('banana')); //false

//5).delete(key) -> removes a key-value pair
fruits.delete('oranges');
console.log(fruits);

//6).clear() -> removes everything
myMap.clear();

//7).size
console.log(myMap.size);//0

//8).keys() -> returns an iterator of all keys
for(let key of fruits.keys()){
    //console.log(key);
}

//9).values()
for(let val of fruits.values()){
    //console.log(val);
}

//10).entries() -> returns an iterator of [key,value] pairs
for(let elem of fruits.entries()){
    //console.log(elem);
}

//11) .forEach(callback)
//Note
/*
in forEach loop the first argument is value, the second is key (different from Object.entries() order).
*/
fruits.forEach((value,key)=>{
    console.log(key,":",value);
});
