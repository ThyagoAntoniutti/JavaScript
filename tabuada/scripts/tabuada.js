function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroTabuada = parseInt(prompt("Digite o número que seseja ver a tabuada: "))
var multiplicador = 1;

/* 
*/

for (var multiplicador = 1; multiplicador <= 10; multiplicador++){
    tabuada = numeroTabuada * multiplicador
    mostra (multiplicador + " X " + numeroTabuada + " = " + tabuada);
} 

mostra("------------------------------------------------------------------------------")

var multiplicador = 1;

while (multiplicador <= 10){
    tabuada = numeroTabuada * multiplicador
    mostra (multiplicador + " X " + numeroTabuada + " = " + tabuada);
    multiplicador++;
}



mostra("Fim!")