"use strict"

console.log("Trabalhando com FUNÇÕES PARAMETRIZADAS");

function trampo() {
    let n1 = 10;
    let n2 = 2;
    let resultado = n1 * n2;
    // Precisamos garantir que ao final tenhamos APENAS 1 RETURN
    if (resultado % 2 == 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
    // Fazemos um processamento e então retornamos esse processamento no return
    // Pare que retorne alguma coisa precisamos utilizar o return. A função vai 
    // realizar todo o processamento e então vai retornar algo para quem fez a chamada da mesma
}

// Se apenas chamarmos a função, não será impresso nada na tela, então podemos usar o console.log
// para que vejamos o que foi retornado.
// Já neste caso passamos o retorno da função trampo em uma variável para então ser exibida no console.log
let num = trampo();
console.log(num);