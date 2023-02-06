let Person : (sn: number, first_name: string, last_name: string) => string;

class Car {
    sn: number;
    name: string;
    brand: string;

    constructor(sn: number, name: string, brand: string) {
        this.sn = sn;
        this.name = name;
        this.brand = brand
    };

    getCarName() : string{
        return "Name: " + this.name + " Brand: " + this.brand
    };
};

Person = (sn, first_name, last_name) => {
    return first_name + " " + last_name
};

let person = Person(1, "Faruq", "Adeyemi");
let car = new Car(1, "Corolla", "Toyota");
let result = car.getCarName();

console.log(person);
console.log(typeof Person)
console.log(result);
console.log(typeof Car)

export {}