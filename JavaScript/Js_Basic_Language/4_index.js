console.log("Let's study about inbuilt Objects in js.");

// Math Object
/*
NOTE : Bilow Math functions will run in console only.

To know more about Math do search MDN Doc's.
*/
// Math.random();
// Math.PI;
// Math.round(35.674);
// Math.max(2,1,4,3);
// Math.min(2,1,4,3);

// --------------------------------------------------------------------------------------------------------------------------------------------

// // String as premative
// let lastName = 'Babbar';
// console.log(typeof lastName);

// // String as object
// let firstName = new String('      Love      ');
// console.log(typeof firstName);

// // To know more about String Methods do search MDN Doc's.
// console.log(lastName.length);
// console.log(lastName[0]);
// console.log(lastName.includes("Ba"));
// console.log(lastName.endsWith("Babb"));
// console.log(lastName.startsWith("Love"));
// console.log(lastName.endsWith("ar"));
// console.log(lastName.toLocaleUpperCase());
// console.log(lastName.toLocaleLowerCase());

// console.log(firstName.trim());
// console.log(firstName.replace('Love', 'l0VE'));

// let massage = "This is my first massage.";
// console.log(massage);

// let word1 = massage.split("");
// console.log(word1);
// let word2 = massage.split(" ");
// console.log(word2);


// --------------------------------------------------------------------------------------------------------------------------------------------

// Escape Sequance -> \n, \', \", \\, \t ,etc

// Template Literal ->  Template Literals use back-ticks (``) rather than the quotes ("") to define a string.
// let massage =
// `This is
// my first
// massage.`;
// console.log(massage);

// --------------------------------------------------------------------------------------------------------------------------------------------

// // Template literals provide an easy way to interpolate variables and expressions into strings.

// // The method is called string interpolation.

// let lastName = 'Babbar' ;

// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},

// Thanks for the Opportunity

// Regards,
// Babbar`;

// console.log(message);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Date Object
// Date(year: number, monthIndex: number, date?: number | undefined, hours?: number | undefined, minutes?: number | undefined, seconds?: number | undefined, ms?: number | undefined)
// let date = new Date();
// console.log(date);

// let date2 = new Date('June 20 1998 07:15');
// let date3 = new Date(1998,);


// date3.setFullYear(1947);

// console.log(date3);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Array object for primitive.

// let numbers = [1,4,5,7];

// console.log(numbers);

// //end -> push
// console.log(numbers.push(9));
// //beginning -> unshift
// console.log(numbers.unshift(8));
// //middle -> splice
// console.log(numbers.splice(2,0,'a','b',));

// //Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));
// console.log(numbers.indexOf(20));


// //we want to check if a number exist in an array
// // Not a good practice.
// // if(numbers.indexOf(2) != -1) 
// //     console.log("present");

// // Good practice.
// console.log(numbers.includes(7));

// console.log(numbers.indexOf('a', 5) );  //From indix 5.

// --------------------------------------------------------------------------------------------------------------------------------------------

// Array object for object.

// Two differant value containing arrey objects are created in array.
// let courses = [
//     { no: 1, naam: 'Love' },
//     { no: 2, naam: 'Rahul' }
// ];

// console.log(courses);
// // Array contain different objects and we are sceraching same value containing another object they have different refrance/addraess value, so output will be -1/false.
// console.log(courses.indexOf({ no: 1, naam: 'Love' }));
// console.log(courses.includes({ no: 1, naam: 'Love' }));

// --------------------------------------------------------------------------------------------------------------------------------------------

// Call back function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// console.log(courses);

// let course = courses.find(function (course) {
//     return course.naam === 'Love';
// });
// console.log(course);

// OR

// let course = courses.find(course => course.naam === 'Love');
// console.log(course);
// let COURSE = courses.find(COURSE => COURSE.naam === 'rahul');
// console.log(COURSE);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Removing element in array

// let numbers = [1,2,3,4,5,6,7];
// console.log(numbers);

// //end
// numbers.pop();
// console.log(numbers);

// //beginning
// numbers.shift();
// console.log(numbers);

// //middle
// numbers.splice(1,3);
// console.log(numbers);


// --------------------------------------------------------------------------------------------------------------------------------------------

// Emptye the array

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// numbers = [];    // Not good choice
// numbers.length = 0; // Type 1.
// numbers.splice(0,numbers.length);    // Type 2.

// console.log(numbers);
// console.log(numbers2);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Combining & Sclicing Elements in Arrays.

// Combining
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);


// // Sclicing
// let marks = [10,20,30,40,50,60,70,80];
// console.log(marks);
// // let sliced = marks.slice();  //Full Sclicing
// // let sliced = marks.slice(2);
// let sliced = marks.slice(2,6);
// console.log(sliced);


// // Combining using spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);


// //Copying using spread operator
// let another = [...combined];
// console.log(another);


// --------------------------------------------------------------------------------------------------------------------------------------------

// Itetrating Arrays

// let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(number=> console.log(number));

// --------------------------------------------------------------------------------------------------------------------------------------------

// Joining Arrays
// let numbers = [10,20,30,40,50];
// const joined = numbers.join('*,*');
// console.log(joined);

// --------------------------------------------------------------------------------------------------------------------------------------------

//Split Method
// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Sorting Method -> Sort function internally behaves as string and sort the element alphabetically.
// let numbers = [5,10,4,40];

// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Filtering Array.

// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);
// console.log(filtered);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Mapping Arrays

// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no ' + value);
// console.log(items);

// --------------------------------------------------------------------------------------------------------------------------------------------

// Mapping with objects

let numbers = [1,2,-6,-9];

let items = numbers
            .filter(value => value >= 0)
            .map(num => {value: num});

console.log(items);