"use strict";

console.log("Entendendo o funcionamento do Switch Case");

// Basicamente, o SWITCH avalia uma expressão e de acordo com o resultado dessa
// expressão ele compara com os CASES programados. Caso algum caso coicida com a 
// expressão ele executa aquele bloco específico de código. Se não houver, ele cai
// em um caso DEFAULT.

let colocacao = 10;

switch (colocacao) {
    case 1:
        console.log("Primeiro lugar");
        break;
    
    case 2:
        console.log("Segundo lugar");
        break;
    
    case 3:
        console.log("Terceiro lugar");
        break;

    case 4:
        console.log("Prêmio de participação");
        break;
    
    case 5:
        console.log("Prêmio de participação");
        break;
    
    case 6:
        console.log("Prêmio de participação");
        break;

    default:
        console.log("Não subiu ao podio");
        break;
}