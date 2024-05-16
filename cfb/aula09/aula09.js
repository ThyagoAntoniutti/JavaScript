"use strict";

console.log("Entendendo pré incremento e pós incremento");

// o - neste caso é um operador de inversão, invertendo o valor
// ou seja, se está negativo se torna positivo e vice versa
let n = -10;

// quando a operação está a direita da variavel, ela é uma 
// operação chamada de pós incremento
// ou seja, primeiro usamos o valor e depois incrementamos (vale para incremento e decremento)
// n++;

// quando incrementamos desta forma, primeiro ele vai imprimir
// o valor da forma que foi declarado, pois está primeiro pegando
// o valor e DEPOIS incrementando. PÓS INCREMENTO, usa depois incrementa
console.log(n++);

// já neste caso, temos a operação de PRÉ INCREMENTO, em que PRIMEIRO
// incrementamos e DEPOIS usamos o valor já com o incremento
console.log(++n);

// neste caso ele opera a variável, ele vai realmente opera-la, seja 
// como pré incremento ou pós incremento