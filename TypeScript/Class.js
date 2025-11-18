//Class & Object
var Employee = /** @class */ (function () {
    function Employee() {
        this.name = "Seed Infotech";
    }
    Employee.prototype.f1 = function () {
        console.log("Function in a class definition");
        console.log(this.name); //class variable
    };
    return Employee;
}());
//creating object
var e1 = new Employee(); //new Employee() - Constructor
e1.f1();
var e2 = new Employee();
e2.f1();
console.log(e1.name); //instance variable
//'this' keyword is used to represent current variable
//Constructor
var EmpDetails = /** @class */ (function () {
    function EmpDetails(id, name, email, DOB, Education) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.DOB = DOB;
        this.Education = Education;
    }
    EmpDetails.prototype.DisplayEmp = function () {
        console.log("Employee Details: ");
        console.log(this.id + " " + this.name + " " + this.email + " " + this.DOB + " " + this.Education + " ");
    };
    return EmpDetails;
}());
var emp1 = new EmpDetails(10, "ABC", "abc@gmail.com", "12-05-2005", "Engg");
emp1.DisplayEmp();
console.log("----------------------------------------");
var emp2 = new EmpDetails(11, "XYZ", "xyz@gmail.com", "09-03-2007", "MBA");
emp2.DisplayEmp();
