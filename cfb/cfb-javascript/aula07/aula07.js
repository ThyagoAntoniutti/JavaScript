"use strict";

console.log("Trabalhando com os operadores lógicos");

/*

** and ou e
|| or ou ou
! not ou não

*/

let n1 = 10;
let n2 = 5;
let n3 = 15;
let n4 = 2;

// para que o and de verdadeiro, todas as operações devem retornar verdadeiro
console.log((n1 > n2) && (n1 > n3));

console.log((n1 > n2) || (n1 > n3));

// o not é sempre o operador da negação, usado quando queremos inverter alguma coisa
// no exemplo abaixo estamos negando o primeiro resultado. então onde tínhamos verdadeiro
// vai na verdade retornar falso
if (!(n1 > n2) && (n3 > n4)) {
    console.log("Verdadeiro");
} else {
    console.log ("Falso");
}