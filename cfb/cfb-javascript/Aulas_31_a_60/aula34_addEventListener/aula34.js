'use strict';

console.log("Trabalhando com eventos");

// Existem diversas formas de trabalharmos com eventos juntando HTML e JavaScript. Podemos programa-los diretamente nas tags ou em arquivos externos js.
// Melhor separar um do outro para mantermos um bom padrão de trabalho. 
// Existem diversos eventos que podemos criar, como movimento de mouse, entrada e saída do mouse, click, tecla para baixo, para cima, etc...
// Podemos chamar uma função em cada um desses elementos para funcionar


// function msg() {
//     alert('Clicou com JS externo,');
// }

// const msg_arrow = () => {
//     alert('Clicou com Arrow Function,')
// }

// const c4 = document.getElementById('c4');
// const c4 = document.querySelector('#c4');
// const c5 = document.querySelector('#c5');
const cursos = [...document.querySelectorAll('.curso')];
// const msg_evento = () => {
//     alert('Clicou usando um Evento.')
// }

// Para adicionar os eventos usamos o addEventListener, que adiciona um Listener, um "escutador", usado para tratar elementos que estamos escutando.
// O addEventListener precisa receber em seus parâmetros o que ele vai fazer e depois o que será executado quando este evento ocorrer. 
// Então colocamos (evento trabalhado, o que será executado).
// c4.addEventListener('click', () => {
//     alert('Clicou usando arrow function entro do evento.');
// });

// Um ponto MUITO IMPORTANTE. Ao executar um evento de um determinado elemento podemos capturar o evento que foi ocorrido, e nesse evento podemos saber quem disparou esse evento.

cursos.map ((el) => {
    el.addEventListener('click', (evt) => {
        console.log(el.innerHTML + ' foi clicado')
    })
})

// c5.addEventListener('click', (evt) => {
//     // No console, em target, ele traz o elemento que acionou o evento.
//     const el = evt.target;
//     el.classList.add('Destaque');
// });
