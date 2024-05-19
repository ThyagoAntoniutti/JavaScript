import React from "react";

export default function Dados(props) {
    return (
        <section>
            <p>Nome: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Cargo: {props.cargo}</p>
        </section>
    )
}