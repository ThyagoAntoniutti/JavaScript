"use strict";

console.log("Entendendo as diferenças entre VAR, LET e CONST");

function teste() {
    if (true) {
        let senha = "Senha";
        console.log("Dentro do IF do teste: " + senha);
    }

}

teste();


const curso = "JavaScript";

curso = "HTML";