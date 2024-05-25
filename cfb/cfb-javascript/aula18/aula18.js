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

while (n < max) {
    console.log("Desenvolimento de Sistemas - " + n);
    if (n > 10) {
        break;
    }
    n++
}

console.log("Fim do programa");