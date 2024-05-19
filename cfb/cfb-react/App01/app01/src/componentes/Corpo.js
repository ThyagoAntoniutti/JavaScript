import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    // podemos também passar funções través do props para usarmos em um componente

    const nome = () => {
        return "Jim";
    }
    const sobrenome = () => {
        return "Halpert";
    } 
    const cargo = () => {
        return "Co-Gerente de Filial";
    } 

    const nome2 = 'Pam';
    const sobrenome2 = 'Beesly';
    const cargo2 = 'Vendedora';

    const somar = (n1, n2) => {
        return n1 + n2;
    }

    return (
        <section>
            <h2>Dunder Mifflin Paper Company. Empresa especializada na comercialização e distribuição de papel.</h2>
            <p>Com várias filiais espaliadas pelos Estados Unidos, a Dunder Mifflin Scranton é a melhor dentre as melhores, com os melhores vendedores da empresa.</p>
            <p>Conheça alguns dos melhores personagens da série. Basicamente são todos mas fiquei com preguiça de colocar todos aqui.</p>
            <br/>
            <hr/>
            <br/>
        <Dados 
            nome = {nome}
            sobrenome = {sobrenome} 
            cargo = {cargo}
            somar = {somar}

            nome2 = {nome2}
            sobrenome2 = {sobrenome2}
            cargo2 = {cargo2}
        />



        </section>
    )
}