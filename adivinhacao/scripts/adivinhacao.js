function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

while (tentativas <= 3){

    var chute = parseInt(prompt("Digite seu chute (números entre 0 e 10): "));

    if (chute == numeroPensado){
        alert('Você acertou! O número pensado era ' + numeroPensado);
        break;
    }else{
        alert('Você errou. Tente novamente');
    }
    tentativas++;
}

alert("Fim!")
