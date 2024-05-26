// This is Comment
console.log("Hello Karan!");
console.log("Welcome to console.");

var a = 1;
var a = true;
//  let a = 34;    //There will be a contradiction in keyword and error is occured.
console.log(a);

let b = 10;
// let  b = 50;     // Not acceptable gives an error
console.log(b);

const c = 15;
//  c = 50;     // Not acceptable gives an error
console.log(c);

//  Dynamic Typing
let e = 12;
// let  e = 50;     // Not acceptable gives an error
e = "Hello";
console.log(e);

// --------------------------------------------------------------------------------------------------------------------------------------------

let num1 = 1;
let num2 ='1';
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1===num2);
console.log(num1!==num2);

// --------------------------------------------------------------------------------------------------------------------------------------------

let age = 27;
let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

console.log(status);

// --------------------------------------------------------------------------------------------------------------------------------------------

let marks = 12;

if(marks >= 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >=70) {
    console.log('C');
}
else if(marks >= 60) {
    console.log('D');
}
else {
    console.log('E');
}

// --------------------------------------------------------------------------------------------------------------------------------------------

let num = 1;

switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}

// --------------------------------------------------------------------------------------------------------------------------------------------


for(let i = 1; i<=5; i=i+1) {
    console.log("Babbar" + i);
}

let x = 1;

// --------------------------------------------------------------------------------------------------------------------------------------------

while(x <= 5) {
    console.log(x);
    x++;
}

// --------------------------------------------------------------------------------------------------------------------------------------------

let y = 1;

do {
    console.log(y);
    y++;
} while(y < 10);