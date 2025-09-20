//Dates
let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.getUTCDate());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(typeof myDate);

//to create own date
let myCreatedDate = new Date(2026,8,22);
console.log(myCreatedDate.toDateString());