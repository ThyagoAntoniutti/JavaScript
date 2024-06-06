// Primeiro precisamos obter os elementos que iremos trabalhar

const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');
const btn = document.getElementById('btnTransferir');
const todosCursos = [...document.querySelectorAll('.curso')];

todosCursos.map((el) => {
    el.addEventListener('click', (evt) => {
        const curso = evt.target;
        curso.classList.toggle('selecionado');
        console.log(el);
    })
})

btn.addEventListener('click', () => {
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]; 
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];
    console.log(cursosNaoSelecionados);
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el);
    })
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el);
    })

    
})

