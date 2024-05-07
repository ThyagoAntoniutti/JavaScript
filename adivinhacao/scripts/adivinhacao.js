function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = 4;

var tentativas = 1;

while (tentativas <= 3){

    var chute = parseInt(prompt("Digite seu chute (números entre 0 e 10): "));

    if (chute == numeroPensado){
        mostra('Você acertou!');
    }else{
        mostra('Você errou. Tente novamente');
    }

    tentativas++;
}

mostra("Fim!")
