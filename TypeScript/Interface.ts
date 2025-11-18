/* 

Interface is an abstract class used to implement multiple Inheritance-(multiple parent and one child)

*/




interface I1
{
    display():void
}
interface I2
{
    show():void
}
class childdemo implements I1, I2{
    display()
    {
        console.log("interface method declared in child class")
    }
    show()
    {
        console.log("interface2 method declared in child class")
    }
}
var c1 = new childdemo()
c1.display()
c1.show()

console.log("_________________________________________")












interface PaymentMethod
{
    processPayment():void
    
    refundPayment():void
}
class CreditCardPayment implements PaymentMethod
{
    processPayment()
    {
        console.log("payment using Card")
    }

    refundPayment()
    {
        console.log("Refunding amount to bank account")
    }
}
class PayPalPayment implements PaymentMethod
{
    processPayment()
    {
        console.log("Payment using Netbanking")
    }

    refundPayment()
    {
        console.log("Refunding in process....")
    }
}
var cc = new CreditCardPayment()
cc.processPayment()
cc.refundPayment()

var pp = new PayPalPayment()
pp.processPayment()
pp.refundPayment()