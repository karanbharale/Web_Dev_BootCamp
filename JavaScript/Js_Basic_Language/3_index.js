console.log("Let's study about Objects in js.");

// Object creation
// let rectangle = {
//     length: 5,
//     breadth: 10,

//     draw: function () {
//         console.log("drawing rectangle");
//     },

//     area: function () {
//         console.log("Area of rectangle is : ", this.length * this.breadth);
//     }
// };

// console.log(rectangle.draw);
// console.log(rectangle.draw());
// console.log("Length : ", rectangle.length);
// console.log("Breadth : ", rectangle.breadth);
// console.log(rectangle.area());

// --------------------------------------------------------------------------------------------------------------------------------------------

// Factory Function
// using object in function -> accessing by creating new object to parent functin. 
// function createRectangle(len, bre) {
//     return rectangle = {
//         length: len,
//         breadth: bre,

//         draw: function () {
//             console.log("drawing rectangle");
//         },

//         area: function () {
//             console.log("Area of rectangle is : ", this.length * this.breadth);
//         }
//     };
// }

// let RECTANGLE = createRectangle(25, 50);

// console.log(RECTANGLE.draw);
// console.log(RECTANGLE.draw());
// console.log("Length : ", RECTANGLE.length);
// console.log("Breadth : ", RECTANGLE.breadth);
// console.log(RECTANGLE.area());

// let RECTANGLE2 = createRectangle(20, 45);
// console.log(RECTANGLE2.area());

// let RECTANGLE3 = createRectangle(18, 36);
// console.log(RECTANGLE3.area());


// --------------------------------------------------------------------------------------------------------------------------------------------

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
// constructor function -> prop/methods -> intialise/Define
// ucing function in function -> accessing by creating new object to parent functin. 
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function () {
//         console.log('drawing');
//     };
//     this.area = function () {
//         console.log("Area of rectangle is : ", this.length * this.breadth);
//     };
// }

//object creation using constrcutor function
// let rectangleObject = new Rectangle(4, 6);  // 'new' key word is mendatorry otherwise output is not generated or gives an error.

// console.log(rectangleObject.draw);
// console.log(rectangleObject.draw());
// console.log("Length : ", rectangleObject.length);
// console.log("Breadth : ", rectangleObject.breadth);
// console.log(rectangleObject.area());


// Dynamically adding and deliting properties
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// --------------------------------------------------------------------------------------------------------------------------------------------

// every function , object ,array , etc in js is an OBJECT.

//cunstructor of cunstructor { object -> function(constructor) -> Function(cunstructor)}
// let Rectangle1 = new Function(
//         'length', 'breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw= function() {
//         console.log('drawing');
//     }`);

//     //object creation using Rectangle1
//     let rect = new Rectangle1(2,3);

//     console.log(rect);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Primitive 
// let a = 10;
// let b = a;       // passes the value of vareable

// a++;
// console.log(a);
// console.log(b);

// Refreance 
// let a = { value: 10};
// let b = a;      // passes the address of vareable

// a.value++;

// console.log(a.value);
// console.log(b.value);

/*
NOTE : Primitive are copied by their values.
       Refreances are copied by their address/refressences.
*/


// --------------------------------------------------------------------------------------------------------------------------------------------

// Pass by value -> when primitive are passed, they are copied by their values.
// let a = 10;

// function inc(a) {
// a++;
//     }

// inc(a);
// console.log(a);


//pass by refreence -> when refreancesare passed, they are copied by their address / refressences.
// let a = { value: 10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

// --------------------------------------------------------------------------------------------------------------------------------------------

// let rectangle = {
//     length: 2,
//     breadth: 4
// };

// //for-in loop 
// for (let key in rectangle) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key, rectangle[key]);
// }

// //for-of loop
// for (let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// --------------------------------------------------------------------------------------------------------------------------------------------

// To check wether any property is present in that function or not.
// if ('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }

// --------------------------------------------------------------------------------------------------------------------------------------------

//object - colone #1
// let src = {
    //     a:10,
    //     b:20,
    //     c:30
    // };
    
    // let dest = {};

    // for(let key in src) {
        //     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(src);
// console.log(dest);

// --------------------------------------------------------------------------------------------------------------------------------------------

//Object Cloning #2
// let src = {
//         a:10,
//         b:20,
//         c:30
//     };

// let src2 = { value: 25};
// console.log(src);
// console.log(src2);


// let dest = Object.assign({}, src, src2);
// console.log(dest);


// src.a++;
// console.log(src);
// console.log(dest);


// --------------------------------------------------------------------------------------------------------------------------------------------

//Object Cloning #3
let src = {
    a: 10,
    b:20,
    c:30
};
console.log(src);

let dest = {...src};
console.log(dest);


src.a++;
console.log(src);

console.log(dest);
