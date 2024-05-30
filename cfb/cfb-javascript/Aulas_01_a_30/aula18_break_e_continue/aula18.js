"use strict"

console.log("Entendendo o funcionamento de BREAK e CONTINUE");

// Basicamente o BREAK é um comando que irá causar uma interrupção na 
// execução do programa. Isso fará com que ao encontrar o break ele pare o loop
// e continue a execução normal do programa.

// Ja o CONTINUE quando executado dentro de um loop ele para somente aquela iteração
// e pula para a próxima iteração e continua a execução do loop até que ele encontre
// outro continue. 

let n = 0;
let max = 1000;
let pares = 0;

// while (n < max) {
//     console.log("Desenvolimento de Sistemas - " + n);
//     if (n > 10) {
//         break;
//     }
//     n++
// }

// console.log("Fim do programa");

// BREAK PARA A EXECUÇÃO IMEDIATA DO LOOP (SAI DO LOOP) E CONTINUA A EXECUÇÃO DO PROGRAMA
// CONTINUE SÓ PARA A ITERAÇÃO ATUAL, PASSANDO PARA A PRÓXIMA ITERAÇÃO DO LOOP, CONTINUANDO AINDA DENTRO DO LOOP

for (let i = n; i < max; i++) {
    console.log("Desenvolvimento de Sistemas - " + i);
    // Quando ele testar, vai ver que é diferente de 0 então é ímpar, então, ele não irá entrar no pares++, indo assim para o próximo. Ele fará o incremento só quando for false
    if (i % 2 != 0) {
        continue;
    }
    pares++;
}

console.log("Quantidade de pares - " + pares);
console.log("Fim do programa");
