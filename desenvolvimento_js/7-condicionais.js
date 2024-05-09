console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array (
    "Salvador", 
    "São Paulo", 
    "Rio de Janeiro", 
    "União da Vitória", 
    "Gramado", 
    "Ilhota", 
    "Porto União"
);

const idadeComprador = 24;

console.log("Destinos Disponíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Você é MAIOR de idade. Pode comprar um pacote de viagem");
} else {
    console.log("Você é MENOR de idade. Não pode comprar");
}

listaDeDestinos.splice(4,1); // removendo item

console.log(listaDeDestinos);