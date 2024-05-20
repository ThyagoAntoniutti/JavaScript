import React from "react";
import jim from './imgs/jim.jpg';
import pam from './imgs/pam.jpg';
import jim2 from './imgs/jim2.jpg';
import pam2 from './imgs/pam2.jpg';

export default function Imagens(props) {
    
    return (
        <>
            <section>
                <section className='caixa'>   
                    <img src={props.trabalhando ? jim2 : jim} alt='Jim Halpert' className='imagem'></img>
                    <img src={props.trabalhando ? pam2 : pam} alt='Pam Beesly' className='imagem'></img>
                </section>
                <button className='botao' onClick = {() => props.setTrabalhando(!props.trabalhando)}>
                    {props.trabalhando  ? "Trollando" : "Trabalhando"}
                </button>
            </section>
        </>
    )
}