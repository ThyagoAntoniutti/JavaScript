console.log("Trabalhando com Atribuição de Variáveis");

let primeiroNome = "Thyago";
let sobrenome = "Antoniutti";
const nomeCompleto = primeiroNome + sobrenome;

console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${nomeCompleto}`); 
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

let contador = 0;
contador = contador + 1;

console.log(nomeCompleto);

let idade; // declaração de variável
idade = 24 // atribuição de valor à avariável

// neste caso, conseguimos  separar declaração e atribuição em
// duas linhas distintas, isso ocorre devido ao uso do let. Quando
// usamos o const, devemos fazer tanto a declaração quanto a atribuição
// na mesma linha

idade = idade + 1;
console.log(idade);