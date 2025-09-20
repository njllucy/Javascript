//1.Stack ( Primitive )
/*
Stores primitive values (numbers, strings, booleans, null, undefined, symbols, BigInt).
Stores references (pointers) to objects in the heap.
Fast, small, automatically managed.
*/
let myID = 'C223244';
let another_ID=myID; 

another_ID = 'C223246'; //doesn't change in myID

console.log(myID);
console.log(another_ID);

//2.Heap ( Non-Primitive )
/*
Heap Memory (for objects, arrays, functions)
Stores non-primitive values (objects, arrays, functions).
Larger, dynamic, accessed via references.
*/
let user1 ={
    email : 'user@gmail.com',
    ip:'127.0.1'
}
let user2 = user1;

console.log(user2);

user2.email = 'user2@gmail.com'; //changed in user1 also

console.log(user1);

/*
3.Garbage Collection

JavaScript uses Automatic Garbage Collection (mostly Mark-and-Sweep algorithm):
If a value is not reachable anymore, it gets deleted from memory.
*/
let user = { name: "Nadia" };
user = null; // object becomes unreachable → garbage collected

/*
Common Memory Issues

Memory Leak → when unused memory is not released.
Causes:
Global variables not cleared.
Unnecessary event listeners.
Closures holding references too long.
Caches that grow endlessly.
*/