import React, { useState } from 'react'
import { Container } from './ExperienceStyle'
import { FaMinus } from "react-icons/fa6";


const Experience = () => {

<<<<<<< HEAD
    const [faculdade, setFaculdade] = useState("")
=======
    const [empresa, setEmpresa] = useState("")
    const [inicio, setInicio] = useState("")
    const [termino, setTermino] = useState("")
    const [cargo, setCargo] = useState("")
    const [atividade, setAtividade] = useState("")
>>>>>>> Experience

    return (

        <Container>

        <div className='experiencia'>
                    <div className='h1'>
                    </div>
                    <h1>Experiências</h1>

                    <input
<<<<<<< HEAD
                        value={faculdade}
                        onChange={(e) => setFaculdade(e.target.value)}
                        placeholder='   Faculdade'
                    ></input>

                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>

                    <button className='btn'>Adicionar formação</button>
=======
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder='   Empresa contratante'
                    ></input>

                    <input
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}
                        placeholder='   Data de início'
                    ></input>

                    <input
                        value={termino}
                        onChange={(e) => setTermino(e.target.value)}
                        placeholder='   Data de término'
                    ></input>

                    <div class="cl-toggle-switch">
                    <label class="cl-switch">
                        <input type="checkbox"/>
                        <span></span>
                        <label className='checkbox_trabalho'>Trabalho atualmente neste cargo?</label>
                    </label>
                    </div>

                    <input
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                        placeholder='   Cargo exercido na empresa'
                    ></input>

                    <textarea
                        value={atividade}
                        onChange={(e) => setAtividade(e.target.value)}
                        placeholder='   Descrição das atividades'
                    ></textarea>


                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>

                    <button className='btn'>Adicionar experiência</button>
>>>>>>> Experience
            </div>
            
            <div className='bt'>
                <button className='voltar'>Voltar</button>
                <button className='proximo'>Próximo</button>
            </div>

        </Container>
    )
}

export default Experience