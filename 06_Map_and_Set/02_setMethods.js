/*
//Basic Set methods
new Set()
add()
clear()
delete()
entries()
forEach()
has()
keys()
values()

//Set properties
size
*/
const letters = new Set();

//add()
letters.add('c');
letters.add('g');
letters.add('y');
letters.add('i');
letters.add('k');


//the size property
console.log(letters.size);

//.clear()
// letters.clear();

//.delete(value) -> Removes a specific value.
letters.delete('b');

//.entries() -> Returns an iterator with [value, value] pairs (for compatibility with Map).
const nums = new Set([1, 2, 3]);
for (let entry of nums.entries()) {
  console.log(entry);
}
// [1, 1]
// [2, 2]
// [3, 3]

//.forEach(callback)
nums.forEach(value => console.log(value));

//the has Method()
//The has() method returns true if a specified value exists in a set.

console.log(letters.has('f'));//false

//the values() Method
//The values() method returns an Iterator object with the values in a Set:
// Get all Values
const myIterator = letters.values();
for (const entry of myIterator){
    console.log(entry);
}
//another way
for (let value of letters.values()) {
  //console.log(value);
}


//.keys() -> Returns an iterator with all values (same as .values()).
for (let key of nums.keys()) {
  console.log(key);
}
/*
Note
A Set has no keys, so keys() returns the same as values().
This makes Sets compatible with Maps.
*/


