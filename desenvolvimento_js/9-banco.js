class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    conta;
    digito;
    saldo;

    sacar(valorSacado) {
        // neste caso usamos o this para dizer que estamos falando da conta
        // que estamos trabalhando no momento, funcionando como um genérico
        if (this.saldo >= valorSacado) {
            this.saldo -= valorSacado;
        }
    }

    depositar(valorDepositado) {
        if (valorDepositado <= 0) {
            console.log("O valor digitado é inválido. Tente novamente!")
        } else {
            this.saldo += valorDepositado;
        }
    }
}

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
contaCorrenteGuilherme.saldo = 0;

contaCorrenteGuilherme.depositar(300);

console.log(contaCorrenteGuilherme);