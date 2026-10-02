class Vehicle{
    #dailyPrice;
    #isAvailable;
    constructor(name, dailyPrice){
        this.name = name;
        this.#dailyPrice = dailyPrice;
        this.#isAvailable = true;
    }
    getPrice(){
        return this.#dailyPrice;
    }
    setPrice(value){
        if (value > 0) {
            this.#dailyPrice = value;
        }
    }
    getAvailability(){
        return this.#isAvailable;
    }
    rent(){
        if(!this.#isAvailable){
            return false;
        }
        this.#isAvailable = false;
        return true;
    }
    returnVehicle(){
        if(this.#isAvailable){
            return false;
        }
        this.#isAvailable = true;
        return true;
    }


    calculateCost(days){
        return this.#dailyPrice * days
    }



}

class Car extends Vehicle{
    constructor(name, dailyPrice){
        super(name,dailyPrice);
        this.hasAC = true;
    }
    calculateCost(days) {
        return this.getPrice() * days + 100;
    }
};
class Motorcycle extends Vehicle{
    constructor(name, dailyPrice){
        super(name,dailyPrice);
        helmetIncluded = true;
    }
    calculateCost(days) {
        return this.getPrice() * days + 30;
    }
};
class Bicycle extends Vehicle{
    constructor(name, dailyPrice){
        super(name,dailyPrice);
        isElectric = false;
    }
    calculateCost(days){
        return this.getPrice() * days;
    }
};



let vehicles = [];
let vehicleForm = document.getElementById("vehicleForm");
let nameVehicle = document.getElementById("nameVehicle");
let vehicleType = document.getElementById("vehicleType");
let dailyPrice = document.getElementById("dailyPrice");
let error = document.getElementById("error");
let result = document.getElementById("result");



vehicleForm.addEventListener("submit", function(e){
    e.preventDefault();

    const nom = nameVehicle.value.trim();
    const type = vehicleType.value;
    const price = Number(dailyPrice.value);

    if (nom === "") {
        error.textContent = "Please enter a vehicle name"
        return;
    }
    else if (price <= 0) {
        error.textContent = "Price must be greater than 0"
        return;
    }
    else{
        error.textContent = ""
    }


   result.innerHTML = `
   <p> ${nom} </p>
   <p> ${type} </p>
   <p> ${price} </p>
   `

})


