import React from 'react';
import jim from './imgs/jim.jpg';

// Cada componente SÓ PODE RETORNAR UMA TAG
export default function Header() {
    return (
        <header>
            <img src={jim} alt='Jim Halpert olhando através da persiana da janela do refeitório para Andy após ter pregado uma peça nele durante o Episódio'></img>
            <h1>Jim Halpert em um de seus melhores momentos em The Office</h1>
        </header>
    )
}