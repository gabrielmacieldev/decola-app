import React, { useState } from 'react'
import { Container } from './TrainingStyle'
import { FaMinus } from "react-icons/fa6";


const Training = () => {

    const [faculdade, setFaculdade] = useState("")
    const [curso, setCurso] = useState("")
    const [turno, setTurno] = useState("")
    const [data, setData] = useState("")
    const [previsao, setPrevisao] = useState("")
    const [status, setStatus] = useState("")
    const [bolsa, setBolsa] = useState("")
    const [idioma, setIdioma] = useState("")
    const [fluencia, setFluencia] = useState("")
    const [ferramentas, setFerramentas] = useState("")
    const [conhecimento, setConhecimento] = useState("")

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

                    <input
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                        placeholder='   Curso'
                    ></input>

                    <input
                        value={turno}
                        onChange={(e) => setTurno(e.target.value)}
                        placeholder='   Turno'
                    ></input>

                    <input
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        placeholder='   Data de início'
                    ></input>

                    <input
                        value={previsao}
                        onChange={(e) => setPrevisao(e.target.value)}
                        placeholder='   Previsão de conclusão / curso'
                    ></input>

                    <input
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        placeholder='   Status do curso'
                    ></input>

                    <input
                        value={bolsa}
                        onChange={(e) => setBolsa(e.target.value)}
                        placeholder='   Porcentagem da bolsa'
                    ></input>

                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>

                    <button className='btn'>Adicionar formação</button>
        </div>

        <div className='idioma'>
                    <div className='h1'>
                    </div>
                    <h1>Idiomas</h1>

                    <input
                        value={idioma}
                        onChange={(e) => setIdioma(e.target.value)}
                        placeholder='   Idioma'
                    ></input>

                    <input
                        value={fluencia}
                        onChange={(e) => setFluencia(e.target.value)}
                        placeholder='   Qual o nível de fluência?'
                    ></input>

                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>


                    <button className='btn'>Adicionar formação</button>

                    <button className='btn'>Adicionar idioma</button>

            </div>

            <div className='ferramentas'>
                    <div className='h1'>
                    </div>
            <h1>Ferramentas</h1>
                    <input
                        value={ferramentas}
                        onChange={(e) => setFerramentas(e.target.value)}
                        placeholder='   Ferramentas'
                    ></input>

                    <input
                        value={conhecimento}
                        onChange={(e) => setConhecimento(e.target.value)}
                        placeholder='   Qual o nível mínimo de conhecimento?'
                    ></input>

                    <button className='btn-btn'> <FaMinus class="icons" /> Remover</button>


                    <button className='btn'>Adicionar formação</button>

                    <button className='btn'>Adicionar ferramenta</button>

            </div>
            
            <div className='bt'>
                <button className='voltar'>Voltar</button>
                <button className='proximo'>Próximo</button>
            </div>

        </Container>
    )
}

export default Training