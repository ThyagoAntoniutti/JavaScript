console.log('Entendendo o getElementById.')
// get element by id - usado para obtermos um elemento específico através do ID

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');

const arrayElementos = [c1, c2, c3, c4, c5, c6];

// console.log(c1);
// console.log(c1.id);
// console.log(c1.innerHTML);
// c1.innerHTML = 'TROCADO';
// console.log(arrayElementos);

// Podemos associar esses elementos a um array para alterar todos
// for (e of arrayElementos) {
//     e.innerHTML = 'TROCADO';
// }

// Também podemos utilizar o MAP para operar essas variáveis
arrayElementos.map((e) => {
    e.innerHTML = 'TROCADO';
    console.log(e);
})