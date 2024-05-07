function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
var anoCopa = 1930;
var limite = parseInt(prompt("Digite a data limite"));

while (anoCopa < limite) {
    mostra("Houve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("Fim!");

