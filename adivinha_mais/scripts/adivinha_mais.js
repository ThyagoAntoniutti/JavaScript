function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function verificar() {
    if (input.value == segredo) {
        alert("Você acertou!");
    }else{
        alert("Você errou!");
    }
    input.value = "";
    input.focus();
}

mostra("Digite um número entre 1 e 10");

var segredo = Math.round(Math.random() * 10);
var input = document.querySelector("input");
input.focus();
var botao = document.querySelector("button");

botao.onclick = verificar;