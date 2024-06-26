"use strict"

console.log("Trabalhando com loops de repetição - LOOP FOR");

// Basicamente uma estrutura de loop é uma estrutura em que precisamos
// repetir um determinado conjunto de funçoes em um determinado ou indeterminado
// número de vezes. As repetições são chamadas ITERAÇÕES.

// Os loops podem ser classificados em definidos e indefinidos. Os definidos são os 
// que sabemos quantas vezes precisamos repetir / iterar. Já os indefinidos são os que
// não sabemos ao certo quantas vezes iremos repetir / iterar quele bloco de código.

// DEFINIDOS --> FOR -----> Usado quando sabemos quantas vezes precisamos repetir / iterar
// INDEFINIDOS --> WHILE --> DO WHILE -----> Usado quando NÃO sabemos quantas vezes precisamos repetir / iterar

// ESTRUTURA DO FOR
// for (inicialização da variável do contador ; condição (o que vai avaliar se continuamos iterando ou não; controle (++ ou -- da variável do contador))){
//    comandos que serão 
//    iterados pelo código
//}

// Devemos cuidar para não entrar em uma rotina de loop infinito

console.log("Início do programa");

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar")
    }
    console.log("Entendendo o funcionamento do FOR - valor do i: " + i);
}

console.log("Fim do programa");