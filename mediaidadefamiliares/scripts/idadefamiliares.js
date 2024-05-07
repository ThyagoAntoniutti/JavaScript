function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Digite quantos familiares a sua família possui: "));
var contador = 1;
var totalIdades = 0

while (contador <= totalFamiliares){
    var idade = parseInt(prompt("Informe a idade do familiar: "));
    contador++
    totalIdades = totalIdades + idade;
    mostra("Familiar " + (contador - 1) + " - " + idade + " anos de idade");
}

var mediaIdades = totalIdades / totalFamiliares;
mostra("Você têm " + totalFamiliares + " familiares");
mostra("A soma das idades é de " + totalIdades);
mostra("A média das idades é de " + mediaIdades);
mostra("Fim!");