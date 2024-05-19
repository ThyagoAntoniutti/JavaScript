import React from 'react';
import dunder from './imgs/dunder.png';

// Cada componente SÓ PODE RETORNAR UMA TAG
export default function Header() {
    return (
        <header>
            <img src={dunder} alt='Logo da empresa Dunder Miflin Paper Company'></img>
            <h1>Dunder Mifflin Paper Company</h1>
        </header>
    )
}