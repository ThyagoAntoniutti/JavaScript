import React from "react";

export default function Exercicio02() {
    return (
        <>
            <section className="container">
                <header>
                    <h1><strong>Cálculo de Média</strong></h1>
                    <p>Digite as notas das 4 provas do aluno</p>
                </header>

                <main className="conjuntoNotas">

                    <section className="containerNotas">
                        <section className="nota">
                            <label>Nota 1:</label><input type="number" className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 2:</label><input type="number" className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 3:</label><input type="number" className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 4:</label><input type="number" className="textoNota"/>
                        </section>
                    </section>

                    <section>
                        <button className="botaoCalcular">Calcular Média</button>
                    </section>
                    
                </main>
            </section>
        </>
    )
}