"use strict";

console.log("Trabalhando com comandos condicionais IF e ELSE");

let num = 5;
let tempo = "Sol";
let energia = 100;

// Quando o IF possui apenas um comando em seu interior não é necessáio colocarmos as chaves
// O aninhamento é um IF dentro de outro IF
if (num > 10) {
    console.log("num é maior que 10");
    if (num > 50) {
        console.log("num é maior do que 50");
    }
} else if (num > 5) {
    console.log("num está entre 6 e 10");
} else {
    console.log("num é menor que 10");
}

if (energia > 70 && tempo == "Sol") {
    console.log("Vou à praia!");
} else {
    console.log("Vou ao cinema assistir Haikyuu!")
}

console.log("fim do programa");