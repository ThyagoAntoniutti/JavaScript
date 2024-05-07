function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 100);
var chute = parseInt(prompt("Digite seu chute (números entre 0 e 10): "));

if (chute == numeroPensado){
mostra('Você acertou!');
}else{
mostra('Você errou. O número correto era ' + numeroPensado + '.');
}