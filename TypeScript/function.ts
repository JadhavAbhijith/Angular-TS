function demo():void{
    console.log("Welcome to Typescript Function");
}


demo()  //function call
demo()






//function with return type
function Display():string {
    return "Function is declared";
}
var str = Display()
console.log(str);









//function without return type
function Add(a, b):void {
    console.log(a+b);
}
Add(10, 20)









//function with return type
function Addition(x, y):number {
    var r: number
    r = x+y;
    return r;
}
var result = Addition(30, 40)
console.log(result)











//nested function
function f1():string {
    return "Hello World!!"
}
function f2():void{
    var str=f1()
    console.log(str)
}
f2()










//Nested Function with parameter
function greet(fullname:string, gender:string): string {
    return "You entered Name: "+fullname+", "+"gender: "+gender;
}

function caller() {
    var msg = greet("Ciara Teens", "female");  //function greet() invoked
    console.log(msg);
}

//invoke function
caller();









//function with default parameter
function Mul(n1, n2=5){
    console.log(n1*n2)
}
Mul(2)   //2*5
Mul(20, 10)
Mul(20)     //20*5









//function to display sum of array ele
function SumOf(data:number[]){
    var sum = 0
    for(var i = 0; i < data.length; i++)
    {
        sum+=data[i]
    }
    console.log("Sum of Array Elements= "+sum)
}
var arr:number[]=[1, 2, 3, 4, 5]
SumOf(arr)











//function with optional parameters - declared using '?'
//Optional parameter should not be followed by other parameter
function Sub(a, b?):void {
    var res:number
    res=a-b
    console.log("Subtraction: "+res)
}
Sub(10)
Sub(20, 4)




//function with optional parameters (?)
function Productdetails(PCode: number, Pname: string, Price: number, discount?:number)
{
    if(discount != undefined)
        console.log("ID: ",PCode+","+"Name: ",Pname+","+"Price: ",Price+","+"Discount: ",discount);
    else
        console.log("ID: ",PCode+","+"Name: ",Pname+","+"Price: ",Price)
}

//invoke the function
Productdetails(123, "LED TV", 70000);

Productdetails(103, "Fridge", 50500, 1000);