let result = 1;

for(let i= 1; i <= 10; i++){
    result = i;
}
console.log("El factor de 10 es:", result);



let result = 1;
let i = 1;

while (i <= 10) {
    result *= i;
    i++;
}

console.log("El factorial de 10 es: ", result);


let result = 1;
let i = 1;

while (true) {
    if (i > 10) {
        break;
    }
    result *= i;
    i++;
}

console.log("El factorial de 10 es: ", result);