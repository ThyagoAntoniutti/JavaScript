function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function sorteio(){
    Math.round(Math.random() * 10)
}

function sorteioNumeros(quantidade){
    var segredos = [];
    var numero = 1;
    while (numero <= quantidade){
        segredos.push(sorteio());
        numero++;
    }

    return segredos;
}


var segredos = sorteioNumeros(3);

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

