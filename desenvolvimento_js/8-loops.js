console.log("Trabalhando com Loops de Repetiçao");

const listaDeDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Rio de Janeiro",
  "União da Vitória",
  "Gramado",
  "Ilhota",
  "Porto União"
);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "União da Vitória";

console.log("\n Destinos Disponíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while (contador < 7) {
    if (listaDeDestinos[contador] == destino){
        console.log("O destino ESTÁ disponível.");
        break;
    } else {
        console.log("O destino NÃO ESTÁ disponível.");
    }

    contador = contador + 1;

}