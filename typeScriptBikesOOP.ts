class Bike {
    miles: 0;
    constructor(public price: number, public max_speed: number) {
        this.miles = 0;
    }
    displayInfo() {
        console.log("price: " + this.price + " max_speed: " + this.max_speed + " total_miles: " +  this.miles)
        return this;
    }

    ride() {
        console.log("Riding")
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing")

        if (this.miles < 0) {
            console.log("cannot reverse")
        }
        else {
            this.miles -= 5;
            return this;
        }
     }

}
const bike1 = new Bike(8, 8);
bike1.ride().ride().ride().reverse().displayInfo()

const bike2 = new Bike(10, 10);
bike2.ride().ride().reverse().reverse().displayInfo()
