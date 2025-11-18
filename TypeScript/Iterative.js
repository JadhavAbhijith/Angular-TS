/* 3 parameters
 1}initialization-start value of loop
2}condition-end value of loop
3}update statement-increment/decrement


2 Types
1.Pre-tested-for,while
2.Post-tested-do_while



for- used when fix iterations are known

for(initializtion,condition,update_statement)
{

    block of loop code
}

*/
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("-------------------------");
for (var i = 1; i <= 10; i = i + 2) {
    console.log(i);
}
console.log("---------------------------");
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("---------------------------");
// print even odd between 1 to 20
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("Even number is=" + i);
    }
    else {
        console.log("Odd number is=" + i);
    }
}
console.log("---------------------------");
// sum of 1 to 10
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("sum is=" + sum);
var sum = 0;
for (var i = 10; i >= 1; i--) {
    sum = sum + i;
}
console.log("sum is=" + sum);
console.log("---------------------------");
// print factorial of 5
var fact = 1;
for (var i = 1; i <= 5; i++) {
    fact = fact * i;
}
console.log("factorial is=" + fact);
var fact = 1;
for (var i = 5; i >= 1; i--) {
    fact = fact * i;
}
console.log("factorial is=" + fact);
var i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
console.log("----------------------");
//count the number of digits
var n = 1256;
var cnt = 0;
while (n > 0) {
    cnt = cnt + 1;
    n = Math.floor(n / 10); //Math.floor function is used for counting digits
    console.log("Entered number=" + n);
}
console.log("Total no of digits=" + cnt);
//Do-while loop
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
//in and of statement in array
var data = [21, 22, 23, 24, 25, 26];
console.log('----------Index of array---------');
for (var i_1 in data) {
    console.log(i_1);
}
console.log('-------Data of Array----------');
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var i_2 = data_1[_i];
    console.log(i_2);
}
var data = [21, 22, 23, 24, 25, 26];
console.log('----------Index of array---------');
for (var j in data) {
    console.log(data[j]);
}
console.log('-------Data of Array----------');
