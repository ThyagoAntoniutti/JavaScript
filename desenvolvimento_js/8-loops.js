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
let destinoExiste = false;

// while (contador < 7) {

//     if (listaDeDestinos[contador] == destino){
//         console.log("O destino ESTÁ disponível.");
//         destinoExiste = true;
//         break;
//     } else {
//         destinoExiste = false;
//         console.log("O destino NÃO ESTÁ disponível.");
//     }

//     contador++;

// }

// console.log("O destino existe:", destinoExiste);

// if (podeComprar && destinoExiste) {
//     console.log("Tenha uma boa viagem!");
// } else {
//     console.log("Houston, temos um problema!");3
// }

for (let cont = 0; cont < 7; cont++){
    if (listaDeDestinos[contador] == destino){
        console.log("O destino ESTÁ disponível.");
        destinoExiste = true;
        break;
    } else {
        console.log("O destino NÃO ESTÁ disponível.");
    }
}