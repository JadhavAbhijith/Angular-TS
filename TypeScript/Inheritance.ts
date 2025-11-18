//Inheritance

/* 
In Java - child extends parent

In C# - child:parent

In Python - class child(parent)   

*used in all for Code Reusability 

*/




class demo
{
    name = "Abhijith"
    p1()
    {
        console.log("Parent Class Method")
    }
}
class Usedemo extends demo
{
    d1()
    {
        console.log("Child class method")
        console.log(this.name)
    }
}
var u1 = new Usedemo()
u1.p1()
u1.d1()
console.log("_________________________________________")







//super() - parent class parameterized constructor




class demo1
{
    name = "Seed Infotech"
    constructor()
    {
        console.log("Default Constructor of base class")
    }
    p1()
    {
        console.log("Parent Class MEthod")
    }
}
class Usedemo1 extends demo1
{
    d1()
    {
        console.log("Child class Method")
        console.log(this.name)
    }
}
var u1 = new Usedemo1()
u1.p1()
u1.d1()

console.log("_________________________________________")










class EmpData
{
    Eid:number
    Ename:string
    constructor(id: number, name:string)
    {
        this.Eid=id
        this.Ename=name
    }
}
class JavaDev extends EmpData
{
    skill:string
    constructor(id:number,name: string, sk: string)
    {
        super(id, name)      //call parent class constructor
        this.skill = sk
    }
    ListEmp()
    {
        console.log("Employee Details")
        console.log(this.Eid+" "+this.Ename +" "+this.skill)
    }
}
var java1 = new JavaDev(100, 'ABC', 'Java')
java1.ListEmp()

console.log("_________________________________________")








