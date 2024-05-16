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

// isto retornará uma coleção de elementos
// neste caso estamos pegando os elementos da tag div
// ou seja, dentro de objs temos uma coleção de objetos div que estão dentro da página
// aqui temos um html collection com 3 elementos. um html collection APENAS RECEBE 
// elementos HTML
const objs1 = document.getElementsByTagName("div");

// agora vamos fazer o teste utilizando o spread
// já aqui temos um array de elementos e neste caso podemos adicionar qualquer coisa dentro
// deste array, como number ou string e as funções para operarmos aqui são diferentes também
const objs2 = [...document.getElementsByTagName("div")];

// não podemos rodar isso no node ou no power shall pois ele não conhece o document
// como ele não conhece a página, se rodarmos em um deles irá dar o erro document is
// not defined. porém no navegador ele retorna um html collection com 3 posições
// aqui temos um html collection com 3 elementos. um html collection APENAS RECEBE 
// elementos HTML
console.log(objs1);
// já aqui temos um array de elementos e neste caso podemos adicionar qualquer coisa dentro
// deste array, como number ou string e as funções para operarmos aqui são diferentes também
console.log(objs2);

// se escrevermos objs1. e objs2. veremos que as opções que teremos de manipulação são diferentes
// no caso do obsj1. ele terá muuuito menos opções do que o obsj2. pois são as mesmas opções que
// trabalhamos com array

// SE PRECISARMOS PERCORRER UMA COLEÇÃO
// neste caso da obsj1 ele irá retornar um erron pois o for each não é reconhecido para html collection
// objs1.array.forEach(element => {
//     console.log(element);
// });

objs2.array.forEach(element => {
    console.log(element);
});
