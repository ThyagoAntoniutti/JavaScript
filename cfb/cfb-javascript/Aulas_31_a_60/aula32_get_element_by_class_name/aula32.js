console.log('Trabalhando com getElementByTagName');

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');

const arrayElementos = [c1, c2, c3, c4, c5, c6];

// Tag name retorna uma coleção de elementos
// Podemos puxar usando spread para espalhar os elementos. Dessa forma, não temos mais um HTML COLLECTION mas sim um ARRAY
// Aqui temos a vantagem de estarmos usando uma constante e não corrermos o risco de alterar estes elementos
const colecaoHTML = [...document.getElementsByTagName('div')];
// mesma coisa que
// colecaoHTML = [...colecaoHTML];

console.log(colecaoHTML);

colecaoHTML.map ((e) => {
    console.log(e);
})

// console.log(arrayElementos);
// console.log(colecaoHTML);