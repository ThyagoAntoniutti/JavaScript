import React from "react";

export default function Exercicio03() {
    return (
        <>
            <section className="container">

                <header>
                    <h1>Conversão de temperatura</h1>
                    <p>Converta °F para °C</p>
                </header>

                <main className="containerDados">
                    <section className="dados">
                        <label>Temperatura em °F:</label><input type="number" className="textoTemperatura"/>
                    </section>

                    <section className="dados">
                        <button className="botaoConverter">Converter</button>
                    </section>

                </main>

                <footer>
                    <p>Resultado da Conversão</p>
                </footer>
            </section>
        </>
    )
}