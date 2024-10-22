/*
// Primitive Datatypes
number
string
boolean
null
undefined
Object type.
An Object is combination of Properties and Behaviours 
Ex:
name
age
gender
qualification
height
walk
run
cry
dance
swim
play
var name = "Sachin";
var age = 27;
var height = 5.11;
var gender = male;
var qualfication = "BE";

->In Javascript We need not have a class to create Objects
-> Object in JS is collection of key, value pairs
-> All the keys inside JS Object must me unique
In order to create an Object in JS We need to follow the below syntax

Syntax
var object_name = {
key1: <value>,
key2: <value>,
.
.
.
.
.
keyN: <value>,
}



var person = {
 name: "Scholarlogic", age: 27, height: 5.11, gender: "Male", qualification: "BE",
} 


For all the objects the memory will be allocated in the Heap Memory

// poojitha reddy trialing

Javascript Objects can be created in two ways.
1)
var person = {
 name: "Scholarlogic", age: 27, height: 5.11, gender: "Male", qualification: "BE",
}


2) 
Using Object Constructor.
Example:
var person = new Object();
person.name = "Scholarlogic",
person.age = 27,
person.gender = "Male"

In order to access or insert the properties inside an object we have 2 approaches


1) 
// object.key operator value
person.name = "Scholarlogic"

2)
person['name'] = "Scholarlogic"

We can use any of the above approaches.



Accessing JS Objects
==================

In order to access the JS Objects we can use dot(.) operator or we can use it as 
shown below
console.log(person.name) //Sucheendra
console.log(person['age']) //27
We can follow any of the above approaches to access the Object.
->

We can also add functions inside a JS Object. As shown below
var person = {
 name: "Scholarlogic", 
 age: 27, 
 height: 5.11, 
 gender: "Male", 
qualification: "BE",
 dance: function() {
 console.log("Scholarlogic  ....!!!")
 }
}
person.dance() //Scholarlogic ....!!


!!!!!Important !!!!!!
From the JSON/JS Object just retrieve only the keys...
Syntax:
Object.keys(object_name)
Example:
var person = {
 name: "Scholarlogic", 
 age: 27, 
 height: 5.11, 
 gender: "Male", 
 qualification: "BE",
 dance: function() {
 console.log("Sucheendra is Dancing....!!!")
 }
}
var keys = Object.keys(person);
console.log(keys)
Output:
['name', 'age', 'height', 'gender', 'qualification', 'dance'];


!!!!!Important !!!!!
From the JSON/JS Object just retrieve only the values...
var values = Object.values(person);
console.log(values)
output:
['Sucheendra', 27, 5.11, 'Male', 'BE', dance()]
!!!
When ever we are trying to copy an object always the references gets copied. Not 
entire object. In otherwords, Objects are Mutable in JS




var name = "Scholarlogic";
console.log(name)
var age = 27;
console.log(age)
var height = 5.11;
console.log(height)
var gender = "male";
console.log(gender)
var qualfication = "BE";
console.log(qualfication)


var singlequotes = 'hell'+'o'+' sfdc'
console.log(singlequotes)

var doublequotes = "Procedure's"
console.log(doublequotes)


var person = {
    name: "Scholarlogic", 
    age: 27, 
    height: 5.11,
     gender: "Male", 
     qualification: "BE"
   } 
   console.log("Object creatin at JS"+person)
*/
// Constructor

/*
var person = new Object();
person.name = "Scholarlogic",
person.age = 27,
person.gender = "Male"
console.log(person)
*/