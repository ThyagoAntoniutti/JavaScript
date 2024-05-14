class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    conta;
    digito;
    // é uma convenção da comunidade utilizar um _ na frente do atributo
    // e isso quer dizer que este atributo é privado e não devemos manipula-lo diretamente
    _saldo = 0;

    sacar(valorSacado) {
        // neste caso usamos o this para dizer que estamos falando da conta
        // que estamos trabalhando no momento, funcionando como um genérico
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            // se não pedimos para retornar algo ele sempre vai retornar
            // como undefined. além disso, o return vai fazer com que 
            // o método em que ele está dentro pare de ser executado
            return valorSacado;
        }
    }

    depositar(valorDepositado) {
        if (valorDepositado <= 0) {
            console.log("O valor digitado é inválido. Tente novamente!")
        } else {
            this._saldo += valorDepositado;
            console.log("Foi depositado o valor de: " + this._saldo + " reais.");
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

contaCorrenteGuilherme.depositar(300);
const valorSacado = contaCorrenteGuilherme.sacar(50);

console.log("Você sacou: " + valorSacado + " reais.");

console.log(contaCorrenteGuilherme);