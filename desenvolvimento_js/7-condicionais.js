console.log("Trabalhando com Condicionais");

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
const temPassagemComprada = true;

console.log("Destinos Disponíveis");
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     // a pessoa é maior de idade
//     console.log("Você é MAIOR de idade. Pode comprar um pacote de viagem");
//     listaDeDestinos.splice(1,1); // removendo idem da lista
// } else {
//     // a pessoa é menor de idade
//     if (estaAcompanhada == true) {
//         console.log("Você está acompanhada por um maior de idade. Pode comprar um pacote de viagem");
//         listaDeDestinos.splice(1,1);
//     } else {
//         console.log("Você é MENOR de idade. Não pode comprar");
//     }

// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  // a pessoa é maior de idade
  console.log("Pode comprar um pacote de viagem");
  listaDeDestinos.splice(1, 1); // removendo idem da lista
} else {
  // a pessoa é menor de idade
    console.log("Você é MENOR de idade. Não pode comprar");
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