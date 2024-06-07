import React, {useState} from "react";

export default function Formulario(){

    const [form, setForm] = useState({'nome':'', 'curso':'', 'ano':''});
    // Desta forma, com a função manipuladora, temos apenas 1 STATE PARA TODOS os elementos do formulário.
    const handleFormChange = (e) => {
        if (e.target.getAttribute('name') == 'fnome'){
            setForm({'nome':e.target.value, 'curso':form.curso, 'ano':form.ano});
        } else if (e.target.getAttribute('name') == 'fcurso'){
            setForm({'nome':form.nome, 'curso':e.target.value, 'ano':form.ano});
        } else if (e.target.getAttribute('name') == 'fano') {
            setForm({'nome':form.nome, 'curso':form.curso, 'ano':e.target.value});
        }
    }

    return(
        <>
        <label>Nome:</label><br/>
        <input 
        type="text" 
        name="fnome" 
        value={form.nome} 
        onChange={(e) => handleFormChange(e)}></input><br/>

        <label>Curso:</label><br/>
        <input 
        type="text" 
        name="fcurso" 
        value={form.curo} 
        onChange={(e) => handleFormChange(e)}></input><br/>

        <label>Ano:</label><br/>
        <input 
        type="text" 
        name="fano" 
        value={form.ano} 
        onChange={(e) => handleFormChange(e)}></input>

        <p>Nome digitado: {form.nome}</p>
        <p>Curso digitado: {form.curso}</p>
        <p>Ano digitado: {form.ano}</p>
        </>
    )
}