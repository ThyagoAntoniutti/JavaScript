"use strict";

console.log("Trabalhando com operadores ternários");
// teste lógico ? se verdadeiro : se falso 

let num = 10;

// num mod 2 "OPERADOR TERNÁRIO - ? SENÃO :"
let res = (!(num % 2) ? "Par" : "Ímpar");
// nesse caso ele imprime ímpar. o resto da divisão por 2 será 0
// 0 é false e 1 é true. isso significa que o operador ternário realiza
// a operação e se o resultado da operação for verdadeiro, ele retornará 
// o primeiro valor (a esquerda dos :) mas se for falso, ele retorna o 
// segundo valor (a direita dos :). para essa operação funcionar com o ternário 
// precisamos negar com not (!)

console.log(res);

let num1 = 10;
let num2 = 5;

let resultado = (num1 > num2 ? "Verdadeiro" : "Falso");

console.log(resultado);