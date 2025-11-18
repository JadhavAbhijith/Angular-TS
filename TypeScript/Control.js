/*

Control Statements

*/
//if-else
var n = 10;
if (n > 20) {
    console.log(n);
}
else {
    console.log("!> 20");
}
//else if ladder
var n1 = 100;
var n2 = 10;
if (n1 > 20) {
    console.log(n1);
}
console.log("-----------------------------");
if (n1 % 2 == 0) {
    console.log(n1 + " is Even");
}
else {
    console.log(n1 + " is Odd");
}
console.log("----------------------------");
if (n1 == n2) {
    console.log(n1 + " Equals " + n2);
}
else if (n1 > n2) {
    console.log(n1 + " Greater than " + n2);
}
else if (n1 < n2) {
    console.log(n1 + " Less than " + n2);
}
console.log("-----------------------------");
//Nested if-else
var num = -10;
if (num > 0) {
    if (num % 2 == 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
else {
    console.log("Negative Number");
}
//Logical Operator - &&, ||, !
var user = 'seed@gmail.com';
var pass = 1234;
if (user == 'seed@gmail.com' && pass == 1234) {
    console.log('Login Successful');
}
else {
    console.log("invalid Login");
}
