function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteia(){
    Math.round(Math.random() * 10)
}

function sorteiaNumeros(quantidade){

    var segredos = [];

    var numero = 1;

    while (numero <= quantidade){

        var numeroAleatorio = sorteia();
        var achou = false;

        for (var posicao = 0; posicao < segredos.length; posicao++){
            if (segredos[posicao] == numeroAleatorio){
                achou = true;
                break;
            }
        }

        if (achou == false){
            segredos.push(numeroAleatorio);
            numero++;
        }

    }

    return segredos;
}

var segredos = sorteiaNumeros(3);

console.log(segredos);

var input = document.querySelector("input");
input.focus();

function verifica() {
    var achou = false;
    for (var posicao = 0; posicao < segredos.length; posicao++){
        if (input.value == segredos[posicao]) {
            alert("Você acertou!");
            achou = true;
            break;
        }
    } 

    if (achou == false){
        alert("Você errou!"); 
    }


    input.value = "";
    input.focus();
}


var botao = document.querySelector("button");
botao.onclick = verifica;

