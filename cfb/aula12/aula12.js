"use strict";

console.log("Entendendo o opreador spread");
// basicamente o spread serve para quebrarmos um array
// sprad - espalhar
// ele quebra um conjunto de elementos e devolve elemento a elemento

let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];

// desta forma, teremos todos os elementos de n1 e n2 dentro de n3
// e também manterá o typeof
// let n3 = [n1, n2];

// já desta forma, estamos copiando os elementos de n1 e n2 utilizando 
// o spread
let n3 = [...n1, ...n2];

// let n3 = [...n1];
console.log("n1: " + n1);
console.log("n2: " + n2);
console.log("n3: " + n3);

const jogador1 = {nome: "Thyago", energia: 100, vidas: 3};
const jogador2 = {nome: "Guilherme", energia: 100, vidas: 5};
const jogador3 = {...jogador1, ...jogador2};

// ele irá imprimir exatamente o que tem dentro de jogador 2 e só isso
// ele irá imprimir os dados que existem diferentes entre os elementos
console.log(jogador3);

const jogador4 = {nome: "Kauã", energia: 100, vidas: 2, magia: 150};
const jogador5 = {nome: "André", energia: 100, vidas: 1, velocidade: 80};
const jogador6 = {...jogador4, ...jogador5};

// neste caso ele irá concatenar os elementos em comum e os elementos diferentes
console.log(jogador6);

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3;
}

let valores = [1, 5, 4, 10];

// já neste caso, quando usamos o spread ele irá espalhar os valores e realizar a
// soma com cada valor. cada valor será aplicado para cada proprierdade da função,
// para cada parâmetro de entrada da função
console.log(soma(...valores));