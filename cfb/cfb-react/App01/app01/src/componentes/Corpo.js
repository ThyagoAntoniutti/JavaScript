import React from "react";
import Dados from "./Dados";

export default function Corpo() {

    const name = 'Dwight';
    const lastName = 'Schrute';
    const job = 'Vendedor';

    return (
        <section>
            <h2>Entendendo a criação e funcionamento dos componentes</h2>
            <p>Por enquanto, continuo achando o React uma bela de uma *****.</p>
            <p>Mas estou começando a entender algumas vantagens dele... Continuo achando uma porcaria. Vamos ver como será no futuro...</p>
            <p>Já são 15:14... não temos muito tempo...</p>
            <br/>
            <hr/>
            <br/>
        <Dados 
            nome = {name} 
            sobrenome = {lastName} 
            cargo = {job}
        />

        </section>
    )
}