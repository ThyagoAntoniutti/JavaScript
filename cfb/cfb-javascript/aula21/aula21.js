"use strict"

console.log("Trabalhando com FUNÇÕES PARAMETRIZADAS");

// Funções parametrizadas é quando podemos entrar com valores para dentro de nossa função
// Podemos passar quantos parâmetros nós precisarmos

function exemplo(parametro1) {
    console.log(parametro1);
}

function soma(n1, n2) {
    let soma = n1 + n2;
    console.log(soma);
}

exemplo("Thyago");
exemplo("Capeleti");
exemplo("Sistemas de Informação");

soma(10, 15);