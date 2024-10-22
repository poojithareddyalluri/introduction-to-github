/*
Arrays are a kind of data structure where we can store multiple data. There is no
restriction about the data we are storing.
How to declare an array??
Syntax:
var array_name = [];
or
let array_name = [];
or
const array_name = [];

*/
/*Example 1 : Approach
var arr = [1,2,3,4,5];
console.log(arr) // [1,2,3,4,5]
*/

/*2nd Approach of declaring arrays
var arr2 = new Array(1,2,3,4,5);
console.log(arr2) // [1,2,3,4,5]
*/


//In JS all the arrays declared are dynamic in nature. Ie as we keep on adding data ,the size of the array keeps on growing.

/*Example:
var arr = [1, "Scholarlogic",true, {}, 'c', [10, "Ramu", false],7777,"Javascript",true];
console.log('First Way ',arr); // Array  [1, 'Scholarlogic', true, {...}, 'c', Array(3), 7777,'dakdah', true]
console.log('Secind way '+arr) // String 1,Scholarlogic,true,[object Object],c,10,Ramu,false,7777,Javascript,true

/*
First Way  [
    1, // integer  Index 0
    'Scholarlogic', // string  Index  1
    true, // boolean Index 2
    {},// spectial character Index 3
    'c',// string Index 4
    [ 10, 'Ramu', false ],// array Index 5
    7777,// integer Index 6
    'Javascript', // string Index 7
    true // Boolean Index 8
  ]
    */


//How can i access the data present in an array?
//Arrays can be accessed as shown below.
/* Arrays has a index starts from  0,1,2,3,4
var arr = [1, "Scholarlogic", true, {}, 'c', [10, "Ramu", false],7777,"dakdah",true];
console.log(arr[4]) //[10, "Ramu", false]
*/

  //console.log('Array index 0 value  ',arr[0]); // 1
  //console.log('Array index 1 value ',arr[1]); // Scholarlogic

//var arr = [1, "Scholarlogic", true, {}, 'c', [10, "Ramu", false],7777,"dakdah",true];
//console.log(arr[5]) //[10, "Ramu", false]
//console.log(arr[4]) //[10, "Ramu", false]
//console.log(arr[-1]) // undefined
//console.log(arr[9])//undefined : the index value exceeds the array values 


//How to get the size of an array? We can use the length property on the array.

/*Example
var arr = [1, "Scholarlogic", true, {}, 'c', [10, "Ramu", false],7777,"dakdah",true];
console.log('Size of an Array using length will return number  ',arr.length); //9

*/

//Array Methods..===============
//1) push()
//When we need to push / add any data to an array we use push method.. push() always appends the data to the end of the array.

/*Example:

var arr = [];
arr.push(10);
arr.push("Scholarlogic");
arr.push(true);
arr.push(null);
console.log(arr); // [10, "Scholarlogic", true, null]
*/


//2) pop() Whenever we need to remove an element from the array we use pop().
// pop() removes the element which is present at the last index of an array.
/*Example:
var arr = [10,"Scholarlogic",true,null, 15.7655343499];
arr.pop();
console.log(arr); // [10,"Scholarlogic",true,null];
*/


//3) unshift() When we need to push the data to the beginning of the array we use the unshift().
/*Example:
var arr = [];
arr.push(10);
arr.push("Scholarlogic");
arr.push(true);
arr.push(null);
console.log(arr); // [10, "Scholarlogic", true, null]

arr.pop(); 
console.log(arr); // [10,"Scholarlogic",true];

arr.unshift("Virat","Dhoni");// we can unshift multiple values 
console.log(arr); // [ 'Virat', 'Dhoni', 10, 'Scholarlogic', true ]*/



//4) shift(); To remove an element from the beginning of an array we can use shift().

/*Example:
var arr = ["Virat",10,"Scholarlogic",true,null, 15.7655343421];
arr.shift();
console.log(arr);
*/


// 5) indexOf()
//This method is used to get the index of a specific element present in an array. If the
//element is present inside the array then its index will be returned. If the element is
//not available inside the array then the indexOf() will return -1/
//Example:
//var arr = ["Virat",10,"Scholarlogic", true, null,15.7655343421,1];
//console.log(arr.indexOf(1)) // 6 : pass the array values to get the index 
//console.log(arr.indexOf('Virat')) // 0 : pass the array values to get the index 

/*var arr = [];
arr.push(10);
arr.push("Scholarlogic");
arr.push(true);
arr.push(null);
console.log(arr); // [10, "Scholarlogic", true, null]
arr.pop(); // pop() removes the last value from the array 
console.log(arr);

arr.unshift("Virat");// set the value to first index 
console.log(arr); // ["'Virat', 10, 'Scholarlogic', true ];

arr.shift(); // Remove the beginning value from the array 
console.log(arr);//[10, 'Scholarlogic', true]

console.log(arr.indexOf(10)) // indexof(value in a array)
*/


//6) join() 
//Whenever we need to join all the elements inside the array join() should be used.
//join() will join all the elements of an array and return it in the string format.

/*Example;
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];
console.log(arr.join()); //console.log(arr.join());//Virat,10,Scholarlogic,true,,15.7655343421
//join() by default will seperate the strings using comma. But if we want to change it
//then we need to pass the character to join() as shown below.
console.log(arr.join('-')); //Virat-10-Scholarlogic-true--15.7655343421

*/


//7) includes()
//includes() checks whether the data passed to it is present inside the array or not. If
/*its present then it returns true else it returns false.
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];
console.log(arr.includes('Scholarlogic Ramesh... ')); //false
console.log(arr.includes('Virat'); //false


/* Scenario -1 
var vrat = 'Virat';
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421,vrat];

console.log(arr.includes(vrat)) //True

// Scenario - 2 hardcoded avlues

var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];

console.log(arr.includes('Virat')) //True


// Scenario - 3 predefined datatypes

var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];

console.log(arr.includes(null)) //True
console.log(arr.includes(undefined)) // false 

var bikes = ['Hayabusa','ducati','Royal enfield','Harley']

var superbikes = ['Ninja','Triump','Harley']
var thirdtbik = superbikes[2]

console.log(bikes.includes(thirdtbik))

morning only includes - js session 
*/ 

//8) lastIndexOf()
// console.log(arr.lastIndexOf(null));
/*

8) reverse()
In order to reverse an array we use reverse()
Example:
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];
console.log(arr);
console.log(arr.reverse());


9) slice()
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421];
It works exactly the way slice() works in case of string.
Example
var arr = ["Virat",10,"Scholarlogic", true, null, 15.7655343421,98,false];
console.log(arr.slice(2, 6)); // "Scholarlogic", true, null, 15.7655343421,98
Starts at 2nd index and goes till 6th index. But ignores the 6th index data.
If we use the slice() it will not alter the original array. Rather it extracts the data
based on the indexes we pass.

slice(start,end);
extraction starts at the start index and ends at the end-1 index;

10) splice()
splice(start,length);
extraction starts at the start index extracts the length number of elements from the
array. In case of splice() it also alters the original array.
Example:
var arr = [1,2,3,4,5,6,7,8];
console.log("Original Before Splicing ",arr);
var splicedArr = arr.splice(2, 4);
console.log("Spliced Arr",splicedArr);
console.log("Original Array After Splicing ",arr);
//Original Before Splicing (8) [1, 2, 3, 4, 5, 6, 7, 8]
Spliced Arr (4) [3, 4, 5, 6]
Original Array After Splicing (4) [1, 2, 7, 8]

In order to remove an element at a particular index then we must do it this way.
var arr = [1,2,3,4,5,6,7, 8];
arr.splice(arr.indexOf(7), 1);
console.log(arr); // [1,2,3,4,5,6,8]


/*
var arr = [];
arr.push(10);
arr.push("Scholarlogic");
arr.push(true);
arr.push(null);
console.log(arr); // [10, "Scholarlogic", true, null]

arr.pop(); 
console.log(arr); // [10,"Scholarlogic",true];

arr.unshift("Virat","Dhoni");// we can unshift multiple values 
console.log(arr); // [ 'Virat', 'Dhoni', 10, 'Scholarlogic', true ]

arr.shift();
console.log(arr);//[ 'Dhoni', 10, 'Scholarlogic', true ]
*/
var arr = ["Virat",10,"Scholarlogic", true, null,15.7655343421,1];
/*
console.log(arr.indexOf(1)) // 6 : pass the array values to get the index 
console.log(arr.indexOf('Virat')) // 0 : pass the array values to get the index 
console.log(arr.join('-')); // Virat-10-Scholarlogic-true--15.7655343421-1
console.log(arr.includes('Virat')); //true
console.log(arr.includes('virat')); //false
console.log(arr.lastIndexOf(null));
console.log(arr.reverse());

console.log(arr.slice(2, 6)); // [ 'Scholarlogic', true, null, 15.7655343421 ]
*/
/*
var arr = [1,2,3,4,5,6,7,8];
console.log(arr.splice(3)) // exclude the values [ 4, 5, 6, 7, 8 ]
*/

//var arr = [1,2,3,4,5,6,7,8];
//console.log(arr.splice(1,2)) // 1 = Start value // 2 = No fo array values  [ 2, 3 ]




    
    

/*Next Session */



// 6 

Array Destructuring and Object Destructuring.
In JS Version 6 or ECMA Script(Javascript) -> es6
The destructuring assignment syntax is a JS Expression that makes it possible to
unpack values from array in to distinct variables.
Example:
var arr = [10, 20, 30, 40];
// OLD APPROACH
// var num1 = arr[0];
// var num2 = arr[1];
// var num3 = arr[2];
// var num4 = arr[3];
Destructuring Syntax
var [num1, num2, num3, num4] = arr;
Output:
num1 = 10
num2 = 20
num3 = 30
num4 = 40
Using rest params..

While destructuring an array we can unpack and assign the remaining part of the
elements to another variable using the rest parameter.
Example:
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var [num1, num2, ...rest] = arr;
console.log(num1 + " " + num2); //10 20
console.log(rest)// [30, 40, 50, 60, 70, 80, 90];


Object Destructuring...
While destructuring an Object we can unpack and assign the key/value pairs to
variables
Example:
var student = {
firstName: "Sucheendra",
lastName: "Scholarlogic"
}
// var fName = student.firstName;
// var lName = student.lastName;
// console.log(fName + " " + lName);
var {firstName, lastName} = student;
console.log(firstName+ " "+lastName);

Conditionals
1) if-else
2) switch
3) ternary

if-else
syntax:
if(some_condition) {
// conditions belonging to true
} else {
//conditions belonging to true
}

Example:

var firstName = "Scholarlogic";
if(firstName.includes("Virat")){
console.log("First Name is ",firstName);
} else {
console.log("First Name is Something else");
}

2) Switch
syntax
switch(condn) {
case:
//some statements
break;
}

Example:
var firstName = "Sourav";
switch(firstName) {
case "Scholarlogic":
console.log("My name is Scholarlogic");
break;
case "Virat":
console.log("My name is Virat");
break;
default:
console.log("My name is something else");
break;
}


Ternary operator

Syntax:
condition ? //true statements : //false statements
Example:
var firstName = "Sourav";
firstName.includes("Scholarlogic") ? console.log("My name is Scholarlogic") :
console.log("My name is some thing some thing");
*/

