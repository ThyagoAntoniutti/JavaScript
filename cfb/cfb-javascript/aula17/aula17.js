"use strict"

console.log("Trabalhando com loop WHILE");
// Basicamente usamos WHILE quando não temos certeza da quantidade de vezes que queremos
// repetir / iterar nosso loop.

console.log("Início do programa");

let n = 0;

// ESTRUTURA do WHILE - while (condição) {
// bloco de código}
while (n < 10) {
    console.log(n);
    n++;
}

let n5 = 10;
let fat = 1;

while (n5 >= 1) {
    fat *= n5;
    n5--;
}

console.log(fat);