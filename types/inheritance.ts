class Person {
    private first_name;
    private last_name;
    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    };

    public getFullName() {
        return this.first_name + " " + this.last_name;
    };

    public describe() {
        return "This is " + this.first_name + " " + this.last_name;
    };
};

class Employee extends Person {
    constructor(
        first_name: string, 
        last_name: string, 
        private job_title: string) {

        super(first_name, last_name);
    };
};

let employee = new Employee("Deji", "Adeyemi", "Software Developer");
let result = employee.getFullName();

console.log(result);