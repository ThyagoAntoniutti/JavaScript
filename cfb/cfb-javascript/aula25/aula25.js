"use strict";

console.log("Trabalhando com Arrow Functions ou Funções Lâmbdas");

// Funções Lâmbdas é o nome para representar funções anônimas. São mecanismos concizos para representar funções anônias
// Ai entramos no conceito de arrow function que é um tipo de declaração de função anônima. E ela usa um conceito que lembra uma flecha

// Normal
// const soma = function (v1, v2) {return v1 + v2}

// Arrow Function
// definir variável = parâmetros => bloco de código
// "pega o que ta nos parenteses (parametros) e envia para as chaves"
const soma = (v1, v2) => {return v1 + v2}

console.log(soma(10, 5));

// DETALHE - Se for uma função que entramos com somente 1 parametro, não precisamos colocar os parenteses, podemos por direto
const nome = n => {return n};
// mesma coisa que 
const nome2 = n => n;
console.log(nome2("Capeleti"));

console.log(nome("Thyago"));

// Quando não usamos o return não somos obrigados a usar as chaves
// Porém isso ocorre quanto tempos APENAS 1 LINHA DENTRO DA ARROW FUNCTION
const add = n => n + 10;

// ele irá pegar o valor e incrementar com o 10, imprimindo 20
console.log(add(10));

// Só um parâmetro de entrada não precisa de parenteses
// Só uma operação simples não precisa do return portanto não precisa das chaves
// Se for uma operação mais complexa, de mais de uma linha precisamos das chaves e do return