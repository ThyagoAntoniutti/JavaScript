function pulaLinha() {
    document.write("<br><br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

var nome = prompt("Informe seu nome: ");
var alturaUsuario = parseFloat(prompt(nome + ", Informe a sua altura: "));
var pesoUsuario = parseFloat(prompt(nome + ", Informe o seu peso: "));

var imcUsuario = Math.round(calculaImc(pesoUsuario, alturaUsuario));

mostra(nome + ", seu IMC é de " + imcUsuario);

if(imcUsuario < 18.5){
    mostra('Seu IMC está Ruim. Abaixo das recomendações de saúde')
}else if((imcUsuario >= 18.5 && imcUsuario <= 35)) {
    mostra('Seu IMC está EXCELENTE. Está entre as recomendações de saúde')
}else{
    mostra('Seu IMC está TERRÍVEL. Está acima das recomendações de saúde')
}