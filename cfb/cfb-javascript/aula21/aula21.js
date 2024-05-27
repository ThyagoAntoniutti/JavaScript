"use strict";

console.log("Trabalhando com FUNÇÕES PARAMETRIZADAS");
let valor = 0;

console.log(valor);

function add(v) {
    return valor + v;
}

// Podemos atribuir um valor a uma variável através de uma função também
valor = add(10);
console.log(valor);


// Podemos definir uma variável para o valor padrão, assim se quisermos alterar esse valor, fazemos isto apenas uma vez
const valorPadrao = 0;

// Funções parametrizadas é quando podemos entrar com valores para dentro de nossa função
// Podemos passar quantos parâmetros nós precisarmos

function exemplo(parametro1) {
    console.log(parametro1);
}

// Caso não passemos parâmetros, podemos usar técnicas para utilizar um valor padrão, como no caso abaixo
// Mesmo que não passemos valores, ele assume que o valor dos parâmetros é o que foi definido. Neste caso, 0
// E, caso passemos apenas um dos valores, ele irá substituir o primeiro valor, enquanto o segundo continuará sendo o valor padrão
function teste(t1 = valorPadrao, t2 = valorPadrao) {
    // console.log(t1 + t2);
    let res;
    res = t1 + t2;
    return res;
}

let resultado_soma = teste(5, 5);
console.log(resultado_soma)

function soma(n1, n2) {
    let soma = n1 + n2;
    console.log(soma);
}

function retorno(n1, n2) {
    return n1 + n2;
}

// Como não há um comando de impressão, como console.log, podemos utiliza-lo da seguinte forma para que tenhamos os valores retornados
console.log(retorno(10, 10));


exemplo("Thyago");
exemplo("Capeleti");
exemplo("Sistemas de Informação");

soma(10, 5);
teste(10);