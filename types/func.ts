let add : (a: number, b: number, c?: number) => string;

add = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return `${a + b + c}`;
    }

    return `${a + b}`;
};

function multiply(a:number, b:number, c:number=4){
    return a * b * c
}

console.log(add(2, 3, 4));
console.log(multiply(2, 2, 2))

export {}