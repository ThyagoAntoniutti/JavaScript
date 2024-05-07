function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Digite o número de vitórias: "));
var empates = parseInt(prompt("Digite o número de empates: "));
var pontos = (vitorias * 3) + empates;

mostra("O seu time tem um total de " + pontos + " pontos.");

if (pontos > 28) {
    mostra("O seu time está melhor do que no ano passado");
}

if (pontos < 28){
    mostra("O seu time está pior do que no ano passado");
}

if (pontos == 28){
    mostra("O seu time está tão bom quanto no ano passado");
}