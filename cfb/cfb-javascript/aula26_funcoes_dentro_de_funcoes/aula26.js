console.log("Trabalhando com funções dentro de outras funções");

// Arrow function parametrizada com o parâmetro rest
const soma = (...valores) => {
    const somar = val => {
        let resultado = 0;
        let v = 0;
        for (v of val)
            resultado += v;
        return resultado;
    }
    return somar(valores);
}

console.log(soma(10, 5, 15));
let valor = [10, 5, 15];
console.log(soma(...valor));