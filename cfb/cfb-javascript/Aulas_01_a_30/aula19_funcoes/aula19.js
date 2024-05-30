"use strict"

console.log("Trabalhando com FUNÇÕES");

// Basicamente é um bloco de comandos que podemos utilizar em momentos oportunos.

// ESTRUTURA DA FUNÇÃO

// function nomeDaFunção(PARENTESES OBRIGATÓRIOS -- servem quando queremos passar algum parâmetro para esta função) {

    // Bloco de código
    // Bloco de código
    // Bloco de código
    // Bloco de código
    // Bloco de código

//}

function nome() {
    for (let i = 0; i < 10; i++) {
        console.log("Thyago Capeleti");
    }
}

nome();

function soma(n1, n2) {
    let soma = n1 + n2;
    console.log(soma);
}

soma(5, 10);

function mudarTexto() {
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    d1.innerHTML = "Thyago Capeleti";
    d2.innerHTML = "Thyago Capeleti";
    d3.innerHTML = "Thyago Capeleti";
}

