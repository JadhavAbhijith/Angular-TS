/*

Interface is an abstract class used to implement multiple Inheritance-(multiple parent and one child)

*/
var childdemo = /** @class */ (function () {
    function childdemo() {
    }
    childdemo.prototype.display = function () {
        console.log("interface method declared in child class");
    };
    childdemo.prototype.show = function () {
        console.log("interface2 method declared in child class");
    };
    return childdemo;
}());
var c1 = new childdemo();
c1.display();
c1.show();
console.log("_________________________________________");
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.processPayment = function () {
        console.log("payment using Card");
    };
    CreditCardPayment.prototype.refundPayment = function () {
        console.log("Refunding amount to bank account");
    };
    return CreditCardPayment;
}());
var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.processPayment = function () {
        console.log("Payment using Netbanking");
    };
    PayPalPayment.prototype.refundPayment = function () {
        console.log("Refunding in process....");
    };
    return PayPalPayment;
}());
var cc = new CreditCardPayment();
cc.processPayment();
cc.refundPayment();
var pp = new PayPalPayment();
pp.processPayment();
pp.refundPayment();
