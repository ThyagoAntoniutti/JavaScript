"use strict";

console.log("Trabalhando com PARÂMETROS REST");


// Basicamente, são funções parametrizadas porém não precisamos
// especificar especificamente a quantidade de parâmetros que enviaremos para dentro da função

function soma(...valores) {
    // Primeiro precisamos saber quantos valores foram passados. Para isso usamos o SPREAD (...) e então o .lenght para sabermos a quantidade, a largura do parâmetro valores
    let tam = valores.length;
    let resultado = 0;
    for (let i = 0; i < tam; i++) {
        // serultado irá ser somado com os valores na posição i que está sendo percorrida
        resultado = resultado + valores[i];
    }
    return resultado;
}
// Se apenas dermos o console.log abaixo ele vai apenas retornar 5, sendo a quantidade de valores e não a soma de 10 com 5 com 2 com 15 com 8
console.log(soma(10, 5, 2, 15, 8));