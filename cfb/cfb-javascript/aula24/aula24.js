"use strict";

console.log("Trabalhando com FUNÇÕES ANÔNIMAS");

// Basicamente são funções que não possuem nomes relacionados ao seu corpo, seu conteúdo
// São funções chamadas em tempo de execução. Ou seja, quando criamos uma função normal, ela só é executada quando chamada
// Já as funções anônimas não são estanciadas, não estão na memória. Elas só são criadas no momento de sua execução
// Ela funciona como uma funçao padrão, pode ser parametrizada, etc... 
// Continuar com a parte de desenvolvimento em React também 
// Não precisa de um nome para esta função, sendo visível que nao foi estanciada. Porém isso muda quando precisamos dela e a chamamos.

// A função anônima não tem nome porém precisamos a associar a uma variável (const ou let)
let f = function(v1, v2) {
    return v1 + v2
}

// Para usarmos a função anônima precisamos colocar a variável e seus valores dentro do console log, neste caso.
console.log(f (10, 5));

const b = function(...valores) {
    let res = 0;
    for (v of valores) {
        res += v;
    }
    return res;
}

console.log(f(10,5));

// Existe outra forma de usabilidade. Neste caso usamos um construtor dentro de uma função anônima, fazendo o uso do operador NEW.
// Este caso serve para funções mais simples, usando o conceito de função construtor

// Fazendo o uso do construtor, teremos os parâmetros que receberemos seguidos pelo que esta função irá fazer utilizando aspas.
// IMPORTANTE - Neste caso, quando usamos a função construtor, o function precisa estar escrito com F MAIÍSCULO, Function.
// const nome = new Function ("parametro 1", "parametro 2", "parametro 3", ..., "o que a função faz") --- Função Construtor
const a = new Function ("v1", "v2", "return v1 + v2");

console.log(a(10, 5));