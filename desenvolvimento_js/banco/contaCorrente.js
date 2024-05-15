import {Cliente} from "./cliente.js";
export class ContaCorrente {
    agencia;
    conta;
    digito;


    // é uma convenção da comunidade utilizar um _ na frente do atributo
    // e isso quer dizer que este atributo é privado e não devemos manipula-lo diretamente
    _cliente;
    _saldo = 0;

    

    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        // instanceof quer dizer "instacia de". neste caso temos "SE o novo valor for uma INSTANCIA DE CLIENTE faça:"
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    } 

    get cliente() {
        return this._cliente;
    }
    

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

    transferir(valorTransferido, contaTransferida) {
        const valorSacado = this.sacar(valorTransferido);
        contaTransferida.depositar(valorSacado);
    }
}