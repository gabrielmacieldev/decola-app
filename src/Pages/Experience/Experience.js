import React, { useState } from 'react'
import { Container } from './ExperienceStyle'
import { FaMinus } from "react-icons/fa6";


const Experience = () => {

    const [faculdade, setFaculdade] = useState("")

    return (

        <Container>

        <div className='formacao'>
                    <div className='h1'>
                    </div>
                    <h1>Formação principal</h1>

                    <input
                        value={faculdade}
                        onChange={(e) => setFaculdade(e.target.value)}
                        placeholder='   Faculdade'
                    ></input>

                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>

                    <button className='btn'>Adicionar formação</button>
            </div>
            
            <div className='bt'>
                <button className='voltar'>Voltar</button>
                <button className='proximo'>Próximo</button>
            </div>

        </Container>
    )
}

export default Experience