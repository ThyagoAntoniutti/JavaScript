import React from "react";

export default function ContencaoCaixa(props) {

    // props.children vai trazer todos os elementos que são filhos do ContencaoCaixa que estão no App.
    // Ele vem como um array, então podemos especificar uma posição específica para imprimir na tela.

    return (

        <>
        <p>{props.site}</p>
        {props.children}
        {props.children[0]}
        {props.children[1]}

        </>
    )
}