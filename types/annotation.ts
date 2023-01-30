// let variableName : type;
// let variableName : type = value;
// const constantName : type = value;

const count : number = 100;
let counter: number;
let name: string;
let smart: boolean;
let names: string[];
let person: {
    name: string,
    age: number,
    smart: boolean
};

let printName: (name: string) => string;

let start = true
start = false

person = {
    name: "Deji",
    age: 25,
    smart: true
}
printName = (name: string) => name;;
counter = 1000;
name = "deji";
smart = true
names = ["Segun", "Deji", "Mike"];

console.log()
console.log(printName("Adedeji"))
console.table(`Name ${name}`);
console.log(names);
console.log(person)
console.log(counter, count, smart);

export {}