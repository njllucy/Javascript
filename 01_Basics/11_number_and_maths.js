const score=300;
//console.log(score);//300

let salary = new Number(100);
//console.log(salary);//[ Number : 1000 ]
//salary = salary.toString();
//console.log(typeof salary);

//console.log(salary.toFixed(2));

// let no=123.8967;
// console.log(no.toPrecision(3)); //123

let no=1123.8967;
//console.log(no.toPrecision(3)); //1.12e+3


const hundreds = 1000000;
//console.log(hundreds.toLocaleString());

// console.log(Number.MAX_VALUE);
// console.log(Number.NEGATIVE_INFINITY);


//Maths

console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(4.5));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.2));//4
console.log(Math.sqrt(5));//2.23606797749979
console.log(Math.max(4,5,6,7,88,99));//99
console.log(Math.random()); // values between 0 to 1
console.log(Math.random()*10+1); // +1 to avoid 0 to 0 value
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min=10;
const max=20;
console.log( Math.floor( Math.random() * (max-min+1) )+min );




