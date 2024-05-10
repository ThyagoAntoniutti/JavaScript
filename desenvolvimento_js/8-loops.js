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

if (idadeComprador >= 18 || estaAcompanhada == true) {
  // a pessoa é maior de idade
  console.log("Pode comprar um pacote de viagem");
  listaDeDestinos.splice(1, 1);
  temPassagemComprada = true; // removendo idem da lista
} else {
  // a pessoa é menor de idade
    console.log("Você é MENOR de idade. Não pode comprar");
    temPassagemComprada = false; // removendo idem da lista
}

// \n em um texto é um caractere de escape. podemos utiliza-lo para pular linhas
console.log("Embarque: \n \n");

if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.");
}

listaDeDestinos.splice(4, 1); // removendo item

console.log(listaDeDestinos);