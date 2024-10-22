console.log("Hello ScholarLogic")
/*
NaN -> Not a Number
Whenever we try to divide a number by a string or any datatype it results in Nan
example:
100/"s" //NaN
Derive banana without hardcoding character n.
console.log('ba'+(100/"s")+'a'); //baNaNa
strings.
Collection of characters enclosed with in quotes (single/double) is considered to be 
string in JS.
Example
var str = "Sachin"; // Valid
var str2= sachin // Invalid
String concatenation.
Combining one or more strings together is called as concatenation.
Inorder to concat 2 strings we should take the help of + operator.
Example:
var firstName = 'sachin';
var secondName = "Ramesh";
console.log(firstName + " " +secondName);
How to find the length of a given string?
To find the length of a given string we use the length property
Example:

var firstName = "Sachin";
console.log(firstName.length) //6


Escape Characters..
Whenever we are enclosing the string within single quote and the string also 
contains the single quote then there will be an issue. To resolve that issue we use 
escape characters.
Example:
var str = 'it's my computer'; 
console.log(str); //error

To fix the above error we must include the escape characters as shown below
var str = 'it\'s my computer'; 
console.log(str); // it's my computer

var str = "This character \\ is a backslash"; 
console.log(str); //This character \ is a backslash

var str = "it's my \"brothers\" computer"; 
console.log(str); // it's my "brothers" computer.

How to compare the strings???
Whenever we need to compare any strings we use the syntax as shown below..
We will be using (==) operator as shown below
Example:
var str1 = "Hello";
var str2 = "Hellow";
console.log(str1 == str2);

Ex:1
We can compare strings with strict comparision as shown below
var str1 = "Hello"; // string Data 
console.log(typeof str1);
var str2 = new String("Hello") // Object Datatype
console.log(typeof str2);

console.log(str1 === str2); //false

Ex:2 
ar str1 = "Hello"; // string Data 
console.log(typeof str1);
var str2 = new String("Hello") // Object Datatype
console.log(typeof str2);
console.log(str1 == str2); //true

The above code will return false. Because we are using strict comparision. When 
we use strict comparision it will not only check the data. rather it will also check 
the type of data. So in our case the type of str1 is string and type of str2 is object. 
since both of them are not same it return false. 
Important string methods.

1) charAt()
Whenever from a string if we need to extract a specific character we use charAt(). 
charAt() accpts a index as a parameter. 
Example
var str = "HELLO WORLD";
console.log(str.charAt(4));
Can we access the string like this??
var str = "Hello World";
console.log(str[0]); // H
If the above code is true then is my below code also true???
str[0] = "P"; //TypeError: Cannot assign to read only property '0' of string 'Hello 
World'
2) toLowerCase()
All the characters of the string will be converted to lowercases
Example:
var str = "HELLO WORLD";
console.log(str.toLowerCase()); //hello world
3) toUpperCase()
All the characters of the string will be converted to uppercases.
var str = "hello world";
console.log(str.toUpperCase()); // HELLO WORLD


!!!important
4) slice() 
Whenever we want to extract a substring from a string we can use slice()
slice(begin_index);
slice(2) It always starts from index 2
Example:
var str = "Hello World";
console.log(str.slice(2)); //It starts extraction from the index2 till the end of the 
string
Example-2:
var str = "Hello World"
console.log(str.slice(-2)); //It starts extaction from index -2 till the end and it 
ignores the value present at the index -2
Example-3:
slice(beginIndex, endIndex);
slice(2, 8);
If we use the above syntax then the extraction starts from the beginIndex and goes 
till the endIndex and ignores the character present at the endIndex.
var str = "Hello World";
console.log(str.slice(2, 8));
Output: llo Wo
5)substring()
Its almost similar to slice(). The difference between substring and slice() is 
substring doesnt support -ve indexes.
Exmple:
var str = "Hello World";


console.log(str.substring(-4)); //Hello World 
var str = "Hello World";
console.log(str.substring(2)); //llo World
6) replace()
When we want to replace a particular string with new string then we use replace 
method().
Example:
var str = "Hello World"; 
console.log(str.replace("Hello", "Hi")); //Hi World
In case we have Multiple occurances of the same string, the replace method would 
replace only the first occurance of the string with the new string.. 
Example:
var str = "Hello Hello World"; 
console.log(str.replace("Hello", "Hi")); //Hi Hello World
To replace all the occurances with the new string we can't use replace() rather we 
should use replaceAll().
Example:
var str = "Hello Hello World"; 
console.log(str.replaceAll("Hello", "Hi")); //Hi Hi World.
7) trim()
Inorder to remove the whitespaces from the string we use the trim() 
Example:
var str = " Hello World ";


console.log(str.trim()+" Hello"); //Hello World Hello
trim() will remove only the whitespaces before and after the string and it wont 
remove the whitespaces present between the strings.
8)concat() 
It is used to concat two strings. 
Example
var str1 = "HELLO";
var str2 = "World";
console.log(str1.concat(str2)); //HELLOWorld


*/

var str1 = "Hello"; // string Data 
console.log(typeof str1);
var str2 = new String("Hello") // Object Datatype
console.log(typeof str2);

console.log(str1 == str2); //true




