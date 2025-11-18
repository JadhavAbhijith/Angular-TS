/* 

Typescript is a superset of javaScript

- Strongly typed, object oriented, compiled language

tsc filename.ts (for compiling ts file)

filename.js (after compiling)

node filename.js (to run)

*/


console.log("Welcome to Typescript!!!!!!");


/* 

Declaring Variable :

variable types : var (global), let (local), const (constant)
data types: number, string, boolean, any

- var a: number = 10
- var s: string = ''
- var b: bool = 
- var z: any =    (can define value of any data type)

*/

var a: number = 100;
console.log(a);


var z: any = true
console.log(z)


let message = "Angular Batch";

let name11 : string = "Abhijith Jadhav";

console.log(name11+" "+message);

let score11:number = 70;
let score21:number = 42.50;
let sum1 = score11 + score21;

console.log("Name: "+name11);
console.log("First Score: "+score11);
console.log("Second Sore: "+score21);
console.log("Sum of Scores: "+sum1);

let notSure: any = 4;
notSure = "May be A string instead";
notSure = false;
const key1 : string = "xyz123";  


