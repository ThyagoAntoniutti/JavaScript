"use strict"

console.log("Trabalhando com as variações FOR IN e FOR OF");



console.log("Início do programa");

let num = [10, 20, 30, 40, 50];
let n;
// Length é a propriedade que retorna o comprimento, ou seja, a quantidade de elementos 
// dentro deste array
// for (let i = 0; i < num.length; i++) {
//     // Se for apenas o i, ele vai imprimir apenas a numeração das posições. Para imprimir
//     // os elementos do array precisamos dizer que é o array e aposição i
//     console.log(num[i]);
// }

// Também existem outros dois tipos de FOR, sendo eles:
// FOR IN - criamos uma variável que vai receber os elementos da coleção que queremos retornar
// Ele vai pegar a coleção num e cada elemento da coleção será colocada em num

// for (n in num) {
//     console.log(num[n]);
// }

// Já no for off tiramos o num, estaríamos imprimindo o n. O for off itera diretamente os elementos dentro da coleção

for (n of num) {
    console.log(n);
}
