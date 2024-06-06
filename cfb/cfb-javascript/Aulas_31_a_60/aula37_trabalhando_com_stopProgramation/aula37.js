const caixa1 = document.querySelector('#caixa1');
const btn_c1 = document.querySelector('#c1');

// O evento é propagado para todos os elementos que estão dentro do container.
// Então todos eles terão essa função do clique. Para resolver isso usamos o stopPropagation
caixa1.addEventListener('click',(evento) => {
    // Dessa forma ele vai imprimir um PointerEvent, que tem uma série de propriedades, sendo uma delas o target (quem disparou o evento).
    // Se dermos um parâmetro.target saberemos quem disparou o evento.
    console.log(evento.target);
    
})

// btn_c1.addEventListener('click',() => {
//     console.log('clicou');
// })