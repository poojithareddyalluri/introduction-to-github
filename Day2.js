/*
console.log("Hello ScholarLogic")

console.log("Hello World"); // Prints the data normally on to the console
console.debug("Debugging in progress"); //Prints the text in blue color
console.warn("This is a warning..."); // Prints the message in Yellow color
console.error("This is an error"); //Prints the message in red color
console.info("This is just an Information") ; //Exactly same as that of log


Javascript Comments
There are two types of comments
1) single line comments 
Syntax: //
Example:
//console.info("This is just an Information") ;
Keyboard Shortcut for single line comments
shift + /


2) Block Level Comments
Syntax
//Your Content 
Example
/*console.log("Hello World"); // Prints the data normally on to the console
console.debug("Debugging in progress"); //Prints the text in blue color
console.warn("This is a warning..."); // Prints the message in Yellow color
Keyboard shortcut
Shift + Alt + A


Variable Declaration Statement


Whenever we need to declare a variable we need not mention the data type in JS
Whenever we need strict rules to be followed in Javascript then we should use 
strict keyword as shown below

syntax:
'use strict';
In order to create variables in Javascript we can use let, var or const.
When we declare a variable using const then it would act like a constant. Once the 
value is assigned , then we cant modify that value. 
Data types:
10 , 10.5432131, "Sachin"
yes/no (true/false) "C"
number -> In order to handle all the numeric values we can use number datatype.
By default All the numbers are floating points in Javascript.  


string -> In order to handle series of characters string datatype is used. 
Anything which is enclosed with in double quotes We consider it to be strings.
Example: var str = "Hello";


boolean -> Yes/No of type of data falls under boolean category. In order to handle 
yes/no (true/false) type of data we can use boolean
Example: 
isCompleted = true;


undefined -> When the variable is declared but it is not defined then the datatype 
will be undefined.


Example:
var firstName


console.log(firstName);
In the above example firstName variable is declared but it is not assigned any 
value. So its undefined.
null -> When the variable is declared and assigned a value of null then the datatype
null -> Represents nothing. But null is also a datatype.
All the above datatypes are primitive datatypes.
Primitive datatypes are such datatypes which doesnt have any methods associated 
with it.
All the primitives are immutable. 
Javascript is weakly typed Programming language. Ie We can assign any type of 
data to any variables.
To know what type of data is present in any variable we can use typeof operator. 
syntax:
typeof <variable_name>;
Example:
var firstName = "Sachin";
console.log(typeof firstName) // string
var age = 32;
console.log(typeof age) // number
Alternative syntax for typeof Operator


console.log(typeof(age)) // number


let myname="Scholarlogic";
console.log('BEFORE UPDATE LET VAR '+myname);


// The variable values will changes according to the conditions 
myname = 'Name updates as SL Groups';
console.log('After UPDATE LET VAR '+myname);


const vowel = 'aeiou'
console.log('vowels are '+vowel)


vowel='newvowel' // at Object.<anonymous> (c:\Users\RajaPrashanth\Videos\01-Scholar Logic\FRONT END SEP 24 BATCH JAVA SCRIPT\Day2.js:97:6)
// at Object.<anonymous> (c:\Users\RajaPrashanth\Videos\01-Scholar Logic\
//FRONT END SEP 24 BATCH JAVA SCRIPT\ -- Folder name
//Day2.js -- File name from the folder 
//:97 -- Line Number
//:6) -- character Position
console.log('New vowels are '+vowel)


var newvar="varchar"
console.log(newvar)


newvar = "Newvarchar"
console.log(newvar)
*/

