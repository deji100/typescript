class Person {
    private first_name: string
    private last_name: string

    constructor(first_name: string, last_name: string) {
        this.first_name = first_name
        this.last_name = last_name
    }

    public getFullName(): string {
        return `First Name: ${this.first_name} Last Name: ${this.last_name}`
    }

    public describe(): string {
        return `My names are ${this.first_name} ${this.last_name}`
    }
}

class Employee extends Person {
    private static headcount: number = 0

    constructor(first_name: string, last_name: string, public age: number) {

        super(first_name, last_name)
        Employee.headcount++
    }

    describe(): string {
        return `I am ${this.age} years old.`
    }

    public static getHeadCount(): number {
        return Employee.headcount
    }
}

let emp1 = new Employee("Faruq", "Adeyemi", 25)
let emp2 = new Employee("Deji", "Adeyemi", 25)
let pers1 = new Person("Segun", "Oshodi")

console.log(pers1.describe())
console.log(pers1.getFullName())
console.log()
// console.log(emp1.age)
console.log(emp1.getFullName())
console.log(emp1.describe())
console.log()
console.log(Employee.getHeadCount())