import React from "react";
import jim from "./imgs/jim.jpg";
import pam from "./imgs/pam.jpg";

export default function Dados(props) {

    const n1 = 10;
    const n2 = 5;

    return (
        <section>
        
            <section>
                <p>Nome: {props.nome()}</p>
                <p>Sobrenome: {props.sobrenome()}</p>
                <p>Cargo: {props.cargo()}</p>
                <img src={jim} alt="Jim Halpert"></img>
            </section>

            <section> 
                <p>Nome: {props.nome2}</p>
                <p>Sobrenome: {props.sobrenome2}</p>
                <p>Cargo: {props.cargo2}</p>
                <img src={pam} alt="Jim Halpert"></img>
            </section>

            <section>
                <p>{"A soma de " + n1 + " com " + n2 + " é igual a " + props.somar(n1, n2)}</p>
            </section>
        </section>
    )
}