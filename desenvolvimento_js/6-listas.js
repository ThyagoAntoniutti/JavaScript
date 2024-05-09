console.log("Trabalhando com Listas");

// ctrl + k + c --> coloca comentário nas linhas selecionadas
// ctrl + k + u --> remove os comentários da linhas selecionadas

// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const rioDeJaneiro = "Rio de Janeiro";

// quando estamos declarando uma lista e inserindo seus valores ou não,
// dizemos que este é "construtor" desta lista
const listaDeDestinos = new Array (
    "Salvador", "São Paulo", "Rio de Janeiro", "União da Vitória", "Gramado", "Ilhota", "Porto União"
);
console.log("Destinos Disponíveis");
console.log(listaDeDestinos);

// este push adiciona um item na lista depois que ela já foi declarada
listaDeDestinos.push(); // este comando, .push serve para adicionarmos itens em nossa lista

// assim como podemos adicionar itens de uma lista, podemos também remover itens delas
// para isso usamos o comando .splice
// nele colocamos algumas informações, sendo a posição de início e a quantidade de itens que
// serão removidos da lista. devemos sempre lembrar que a contagem das posições das listas se
// iniciam em 0
listaDeDestinos.splice(4,1);
console.log(listaDeDestinos);