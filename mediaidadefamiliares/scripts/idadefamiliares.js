function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var idadePedro = 28;
var idadeMarta = 32;
var idadeJorge = 60;
var idadeBete = 22;

var totalIdades = (idadePedro + idadeMarta + idadeJorge + idadeBete);
var mediaIdades = totalIdades / 4;
mostra(mediaIdades);