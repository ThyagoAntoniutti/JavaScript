console.log("Trabalhando com o operador THIS");

// This pode ser utilizado dentro de funções JavaScript

function aluno(nome, nota) {
    // Neste caso this faz referencia a um elemento da função nome
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function () {
        // setTimeout gera um atraso na execução
        setTimeout(function() {
            console.log(this.nome);
            console.log(this.nota);
        },2000)
    }
    
    this.dados_arrow = function () {
        // setTimeout gera um atraso na execução
        setTimeout(() => {
            console.log(this.nome);
            console.log(this.nota);
        },2000)
    }
}

// const aluno1 = new aluno('Thyago', 10);

const aluno1 = new aluno("Thyago", 10);
aluno1.dados_anonimo();
aluno1.dados_arrow();