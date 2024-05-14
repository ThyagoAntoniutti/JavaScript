import {Cliente} from "./cliente";
import {ContaCorrente} from "./contaCorrente";

const cliente1 = new Cliente();

cliente1.nome = "Guilherme";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();

cliente2.nome = "André";
cliente2.cpf = 44455566609;
cliente2.rg = 456789123;

console.log(cliente1);
console.log(cliente2);

const contaCorrenteGuilherme = new ContaCorrente();

contaCorrenteGuilherme.agencia = 422;
contaCorrenteGuilherme.conta = 24653;
contaCorrenteGuilherme.digito = 7;

contaCorrenteGuilherme.depositar(300);
const valorSacado = contaCorrenteGuilherme.sacar(50);

console.log("Você sacou: " + valorSacado + " reais.");

console.log(contaCorrenteGuilherme);