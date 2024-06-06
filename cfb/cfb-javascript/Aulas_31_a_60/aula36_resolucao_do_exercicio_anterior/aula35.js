// Primeiro precisamos obter os elementos que iremos trabalhar

const caixa1 = document.getElementById('caixa1');
const caixa2 = document.getElementById('caixa2');
const btn = document.getElementById('btnTransferir');
const todosCursos = [...document.querySelectorAll('.curso')];

// Basicamente, aqui estamos criando uma arrow function para pegar os elementos que queremos trabalhar.
// Então, definimos os elementos como el.
todosCursos.map((el) => {
    // Aqui criamos um evento de click, em que teremos um evento, chamado de evt como parâmetro
    el.addEventListener('click', (evt) => {
        // Então, teremos uma constante curso cuja atribuição é o evt.target. O target, serve para que possamos selecionar esse elemento.
        // Então, se dermos um console.lot no el poderemos ver que o elemento clicado foi selecionado.
        const curso = evt.target;
        // Então, usamos esse curso selecionao e atribuimos o classList.toggle. O toggle serve para o seguinte: Ele vai verificar se o elemento tem o 'selecionado' (classe definida para quando está selecionado). Se ele tem o selecionado ele remove. Se não tem, ele adiciona. Com isso, podemos obter os elementos que estão selecionados. Podemos percorrer nessa coleção e verificar quais elementos possuem a classe selecionar, pegar esses elementos e passar para a outra caixa.
        curso.classList.toggle('selecionado');
        // Aqui estamos apenas vendo se a seleção funcionou.
        console.log(el);
    })
})

btn.addEventListener('click', () => {
    // Aqui, ao clicar no botão ele vai criar uma rrray com todos os elementos selecionados
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]; 
    // E aqui temos uma lista dos elementos não selecionados
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')];
    console.log(cursosNaoSelecionados);
    cursosSelecionados.map((el) => {
        // Aqui ele vai anexar um filho ao elemento caixa2, sendo os filhos que estiverem indo no el.
        caixa2.appendChild(el);
    })
    cursosNaoSelecionados.map((el) => {
        //Dessa forma, pegaremos todos os elementos que nãon tem o selecionado e o transferimos para a caixa1.
        caixa1.appendChild(el);
    })

    
})

