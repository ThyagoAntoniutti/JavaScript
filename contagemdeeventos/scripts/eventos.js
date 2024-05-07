function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var totalDeEventos = parseInt(prompt("Informe o total de eventos"));

mostra("Você organizou " + totalDeEventos + " eventos neste mês.")
pulaLinha();

var contador = 1;
var totalGastoComEventos = 0;


while(contador <= totalDeEventos) {

    var gasto = parseInt(prompt("Informe total gasto com o evento"));
    totalGastoComEventos = totalGastoComEventos + gasto;
    contador++;
    mostra("Evento " + (contador - 1) + " - R$" + gasto);
    pulaLinha();
}

var media = totalGastoComEventos / totalDeEventos;

mostra("O total gasto com eventos neste mês foi de: R$" + totalGastoComEventos);
pulaLinha()
mostra("A média de gastos deste mês foi de: R$" + media);