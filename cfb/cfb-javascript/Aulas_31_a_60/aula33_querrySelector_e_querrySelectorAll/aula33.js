console.log('Trabalhando com querrySelector e querrySelectorAll');

// A grande diferença de usarmos esses métodos é que eles não são específicos para um tipo de index ou apontador.
// getElementById obtém somente o elemento por id, ByTagName apenas pelo nome da tag e ByClassName apenas a classe que especificamos.
// O querySelector é mais genérico, obtendo o elemento que especificamos para ele, seja id, classe ou tag, bastanfazermos a diferenciação dentro dos parâmetros do método.

const divTodos = [...document.getElementsByTagName('div')];
const cursoTodos = [...document.getElementsByClassName('curso')];
const cursosC1 = [...document.getElementsByClassName('c1')];
const cursosC2 = [...document.getElementsByClassName('c2')];

// Também podemos pegar um elemento específico indicando a sua posição.
const cursoEspecial = document.getElementsByClassName('curso') [6];

// querySelector('div') --> qundo usamos o querySelector, nós especificamos o que queremos e nesse caso pegamos somente UMA div de TODOS os elementos. Ele retorna o PRIMEIRO elemento que ele encontrar. Então ele retornaria A PRIMEIRA DIV QUE ELE ENCONTRASSE.
// querySelectorALl('div') --> retorna uma coleção com TODAS AS DIVS
const query_divTodas = [...document.querySelectorAll('div')];
// Com o spread retornamos tudo em uma rray para termos mais possibilidades de operação.
// Para chamarmos uma classe específica, usamos o . assim como usamos no css.
const query_cursoTodos = [...document.querySelectorAll('.curso')];
const query_cursosC1 = [...document.querySelectorAll('.c1')];
const query_cursosC2 = [...document.querySelectorAll('.c2')];
// E para chamarmos um id específico usamos o #.
// const query_cursoEspecial = document.querySelectorAll('#c1');
const query_cursoEspecial = document.querySelectorAll('#c1')[0];



console.log(query_divTodas);
// console.log(divTodos);
// console.log(cursoTodos);
// console.log(cursosC1);
// console.log(cursosC2);
// console.log(cursoEspecial);


// cursosC1.map((el) => {
//     el.classList.add('destaque');
// })
