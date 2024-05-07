function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
var anoCopa = 1930;

while (anoCopa < 2016) {
    alert("Houve copa em " + anoCopa);
    anoCopa = anoCopa + 4; 

}

alert("Fim!");

