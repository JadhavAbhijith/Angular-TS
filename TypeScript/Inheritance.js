//Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
In Java - child extends parent

In C# - child:parent

In Python - class child(parent)

*used in all for Code Reusability

*/
var demo = /** @class */ (function () {
    function demo() {
        this.name = "Abhijith";
    }
    demo.prototype.p1 = function () {
        console.log("Parent Class Method");
    };
    return demo;
}());
var Usedemo = /** @class */ (function (_super) {
    __extends(Usedemo, _super);
    function Usedemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Usedemo.prototype.d1 = function () {
        console.log("Child class method");
        console.log(this.name);
    };
    return Usedemo;
}(demo));
var u1 = new Usedemo();
u1.p1();
u1.d1();
console.log("_________________________________________");
//super() - parent class parameterized constructor
var demo1 = /** @class */ (function () {
    function demo1() {
        this.name = "Seed Infotech";
        console.log("Default Constructor of base class");
    }
    demo1.prototype.p1 = function () {
        console.log("Parent Class MEthod");
    };
    return demo1;
}());
var Usedemo1 = /** @class */ (function (_super) {
    __extends(Usedemo1, _super);
    function Usedemo1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Usedemo1.prototype.d1 = function () {
        console.log("Child class Method");
        console.log(this.name);
    };
    return Usedemo1;
}(demo1));
var u1 = new Usedemo1();
u1.p1();
u1.d1();
console.log("_________________________________________");
var EmpData = /** @class */ (function () {
    function EmpData(id, name) {
        this.Eid = id;
        this.Ename = name;
    }
    return EmpData;
}());
var JavaDev = /** @class */ (function (_super) {
    __extends(JavaDev, _super);
    function JavaDev(id, name, sk) {
        var _this = _super.call(this, id, name) || this; //call parent class constructor
        _this.skill = sk;
        return _this;
    }
    JavaDev.prototype.ListEmp = function () {
        console.log("Employee Details");
        console.log(this.Eid + " " + this.Ename + " " + this.skill);
    };
    return JavaDev;
}(EmpData));
var java1 = new JavaDev(100, 'ABC', 'Java');
java1.ListEmp();
console.log("_________________________________________");
