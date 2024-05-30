console.log("Trabalhando com funções geradoras");

// Uma função geradora tem seu retorno adiado até o momento que precisamos deste retorno
// As funções geradoras são o pilar da programação assíncrona DENTRO DO JAVASCRIPT
// Quando uma função normal é chamada, quem fica com o controle da mesma é a própria função, terá seu controle até o momento final quando retorna algo
// Já com as funções geradoras, ela pode ter esse controle quando quer retornar alguma coisa. Então basicamente quando chamamos uma função geradora não precisamos de todo o processamento para retornar alguma coisa no final e entregar a execuação para o programa. Podemos ir retornando coisas ao longo da execução.
// funções geradoras são definidas por --> function*

// function* cores() {
    // quando encontra um yield ela retorna um conteudo
//     yield "Vermelho";
//     yield "Verde";
//     yield "Azul";
// }

// iterator cores
// const itc = cores();
// console.log(itc.next().value);
// console.log(itc.next().value);
// console.log(itc.next().value);
// Cada chamada tem um controle sobre o conteúdo

// function* perguntas(){
//     // Estamos criando uma constante então permite que salvemos algo nesta variável
//     const nome = yield 'Qual seu nome?';
//     const esporte = yield 'Qual seu esporte preferido?';
//     return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte;
// }

// const itp = perguntas();
// console.log(itp.next().value);
// console.log(itp.next("Thyago").value);
// console.log(itp.next("Vôlei").value);

function* contador() {
    let i = 0;
    while(true) {
        yield i++;
        if (i > 5) {
            break;
        }
        // loop infinito
    }
}

const itc = contador();
// for (let i = 0; i < 10; i++) {
//     console.log(itc.next().value);
// }

for (let c of itc) {
    console.log(c);
}