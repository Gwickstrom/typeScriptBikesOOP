var Bike = /** @class */ (function () {
    function Bike(price, max_speed) {
        this.price = price;
        this.max_speed = max_speed;
    }
    Bike.prototype.displayInfo = function () {
        console.log("price:" + this.price + ", max_speed: " + this.max_speed + "total_miles: " + this.miles);
    };
    Bike.prototype.ride = function () {
        console.log("Riding");
        this.miles += 10;
    };
    Bike.prototype.reverse = function () {
        console.log("Reversing");
        if (this.miles < 0) {
            console.log("cannot reverse");
        }
        else {
            this.miles -= 5;
        }
    };
    return Bike;
}());
var bike1 = new Bike(8, 8);
bike1.ride();
bike1.ride();
bike1.ride();
bike1.reverse();
bike1.displayInfo();
var bike2 = new Bike(10, 10);
bike2.ride();
bike2.ride();
bike2.reverse();
bike2.reverse();
bike2.displayInfo();
