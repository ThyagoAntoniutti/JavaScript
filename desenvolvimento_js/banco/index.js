import {Cliente} from "./cliente.js";
import {ContaCorrente} from "./contaCorrente.js";

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
contaCorrenteGuilherme.cliente = cliente1;

contaCorrenteGuilherme.agencia = 422;
contaCorrenteGuilherme.conta = 24653;
contaCorrenteGuilherme.digito = 7;

const contaCorrenteAndre = new ContaCorrente();
contaCorrenteAndre.cliente = cliente2;

contaCorrenteAndre.agencia = 422;
contaCorrenteAndre.conta = 84652;
contaCorrenteAndre.digito = 3;

console.log(contaCorrenteGuilherme);
console.log(contaCorrenteAndre);

contaCorrenteGuilherme.depositar(500);

console.log(contaCorrenteGuilherme);

contaCorrenteGuilherme.transferir(200, contaCorrenteAndre);

console.log(contaCorrenteAndre);
console.log(contaCorrenteGuilherme);
