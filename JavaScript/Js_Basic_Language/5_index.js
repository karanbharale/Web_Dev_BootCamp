console.log("Let's learn about functions today.");

// Function
/*

function function_name(parameters){
    Staementa...;
    
    return ;
}

*/


// //function call or invoke
// run();
// // JS engine host all the functions by default top of the program this is known as hoisting.

// //function declaration
// function run() {
//     console.log('running');
// }


// // stand(); //Gives error : Cannot access 'stand' before initialization,
// // because function hoisting is only for function declaration not for function assignment.

// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// stand();
// let jump = stand;
// jump();

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('Skipping');
// };

// stand2();

// --------------------------------------------------------------------------------------------------------------------------------------------

// let x = 1;
// x = 'a';
// console.log(x);



// function sum(a,b){
//     return a+b;
// }

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5));

// --------------------------------------------------------------------------------------------------------------------------------------------


// function sum(a,b){
//     console.log(arguments);     //Argument is not an array it is an OBJECT.
//     return a+b;
// }

// let ans = sum(1,2,2,3);
// console.log(ans);


// --------------------------------------------------------------------------------------------------------------------------------------------


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// let ans = sum(1,2,2,3);
// console.log(ans);

// --------------------------------------------------------------------------------------------------------------------------------------------


//Rest Operator

// function sum(num, value, ...args) {
//     console.log(args);  // All the parameters are stored in form of array here.
// }

// sum(1,2,3,4,5,6);
// --------------------------------------------------------------------------------------------------------------------------------------------

// //Default Parameters
// function interest(p, r = 6, y = 9) {
//     return p * r * y / 100;
// }

// console.log(interest());
// console.log(interest(5000));
// console.log(interest(5000, 3, 8));
// console.log(interest(1000, undefined, 8));

// --------------------------------------------------------------------------------------------------------------------------------------------

//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

// let person = {
//     fName: 'Love',
//     lName: 'Babbar',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value) {
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// console.log(person);
// console.log(person.fullName);
// person.fullName = 'Karan Bharale';
// console.log(person.fullName);
// console.log(person);

// --------------------------------------------------------------------------------------------------------------------------------------------

//issue - > read only
// Try and Catch Block

// let person = {
//     fName: 'Love',
//     lName: 'Babbar',

//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value) {
//         if (typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };


// console.log(person.fullName);
// try {
//     // person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);

// --------------------------------------------------------------------------------------------------------------------------------------------

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);

// --------------------------------------------------------------------------------------------------------------------------------------------

// let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);

// --------------------------------------------------------------------------------------------------------------------------------------------

let arr = [-1,-2,-3,-4];

let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log("PRINTING TOTAL SUM:")
console.log(totalSum);
