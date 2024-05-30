console.log("Trabalhando com a função MAP");

// A função MAP tem a funcionalidade de percorrer ARRAYS, percorrer COLEÇÕES
// Usamos quando precisamos trabalhar elemento a elemento de um array
// Ele irá iterar TODA a coleção, sem parar no meio

// const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'];
// Para o MAP, podemos passar até 3 parâmetros
// O primeiro indica o elemento da coleção que ele está iterando
// O segundo indica o índice, a posição deste elemento dentro daquela coleção
// É o método mais otimizado para percorrer toda a coleção e trabalhe com as funções
// cursos.map((elemento, indice)=>{
//     console.log('Curso: ' + elemento + '- Posição do curso: ' + indice);
// })

// let c = cursos.map((elemento, indice)=>{
//     return elemento;
// })

// console.log(c);

// let d = cursos.map((elemento, indice)=>{
//     return '<div>' + elemento + '</div>';
// })

// console.log(d);

// let elementos = document.getElementsByTagName("div");
// elementos = [...elementos];
// elementos.map((el, i)=> {
//     el.innerHTML = 'Thyago Capeleti - Dev Full Stack';
//     console.log(el.innerHTML);
// })

// const elementos = document.getElementsByTagName("div");
// const valores = Array.prototype.map.call(elementos, ({innerHTML}) => innerHTML);
// console.log(valores);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;
let num = ['1', '2', '3', '4', '5'].map(dobrar);
console.log(num);