import React, { useState } from 'react'
import { Container } from './ExperienceStyle'
import { FaMinus } from "react-icons/fa6";
import { goToAbout, goToTraining } from '../../router/coordinates';
import { useNavigate } from 'react-router-dom';

const Experience = () => {

    const [empresa, setEmpresa] = useState("")
    const [inicio, setInicio] = useState("")
    const [termino, setTermino] = useState("")
    const [cargo, setCargo] = useState("")
    const [atividade, setAtividade] = useState("")
    const navigate = useNavigate()

    return (

        <Container>

            <div className='experiencia'>
                <div className='h1'>
                </div>
                <h1>Experiências</h1>

                <input
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
                        <input type="checkbox" />
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

                <button> <FaMinus class="icons" /> Remover</button>
                <button className='btn-experiencia'>Adicionar experiência</button>
            </div>

            <div className='btn'>
                <button onClick={() => goToTraining(navigate)} className='voltar'>Voltar</button>
                <button onClick={() => goToAbout(navigate)} className='proximo'>Próximo</button>
            </div>
        </Container>
    )
}

export default Experience