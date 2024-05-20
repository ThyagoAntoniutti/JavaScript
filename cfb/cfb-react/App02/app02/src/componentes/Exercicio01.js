import React from "react";

export default function Exercicio01() {
    return (

        <section className="container">

            <header className="cabecalho">
                <h1><strong>Exercício 01</strong> - Cálculo de IMC</h1>
                <p>Informe seus dados nos campos abaixo para calcular seu IMC. Os dados resultantes estão de acordo com os dados da OMS</p>
            </header>

            <main className="corpo">
                <section className="dados">
                    <section className="campos">
                        <label className="legendaCampos">Digite sua idade:</label><input type="number" className="campoTexto"/>
                    </section>

                    <section className="campos">
                        <label className="legendaCampos">Digite seu peso:</label><input type="number" className="campoTexto"/>
                    </section>

                    <section className="campos">
                        <label className="legendaCampos">Digite sua altura:</label><input type="number" className="campoTexto"/>
                    </section>
                </section>

                <section className="botao">
                    <button className="botaoCalcular">Calcular</button>
                </section>
                
            </main>

            <footer className="rodape">

                <section className="containerResultados">

                    <section className="dadosUsuario">
                        <p className="textoResultados">Idade:</p>
                        <p className="textoDadosUsuario">Idade Usuario</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Peso:</p>
                        <p className="textoDadosUsuario">Peso Usuário</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Altura:</p>
                        <p className="textoDadosUsuario">Altura Usuário</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Resultado IMC:</p>
                        <p className="textoDadosUsuario">IMC Usuário</p>
                    </section>

                </section>

                <section className="textoResultadoFinal">
                    <p>Com a idade, a composição corporal muda: os músculos diminuem e o tecido adiposo aumenta. Por isso, o cálculo do IMC é igual, mas os resultados são diferentes em pessoas com mais de 60 anos. </p>
                </section>
            </footer>

        </section>
    )
}