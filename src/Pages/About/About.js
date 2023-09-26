import React, { useState } from 'react'
import { Container } from './AboutStyle'
import { goToExperience, goToRocket } from '../../router/coordinates'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const [etnia, setEtnia] = useState("")
    const [genero, setGenero] = useState("")
    const [sexual, setSexual] = useState("")
    const [deficiencia, setDeficiencia] = useState("")
    const [mora, setMora] = useState("")
    const [medio, setMedio] = useState("")
    const [renda, setRenda] = useState("")
    const [bolsa, setBolsa] = useState("")

    const navigate = useNavigate()

    return (

        <Container>
            <div className='sobre'>
                <div className='h1'>
                </div>
                <h1>Sobre você</h1>
                <h2>O nosso objetivo é saber mais sobre quais perfis estamos conseguindo atingir para melhorarmos cada vez mais as experiências para os desenvolvedores do Brasil na busca pelo trabalho.</h2>
            </div>

            <div className='sobre'>
                <div className='h1'>
                </div>
                <strong>Racialmente, você se considera uma pessoa</strong>
                <p>As respostas abaixo são baseadas na classificação do IBGE</p>

                <input
                    value={etnia}
                    onChange={(e) => setEtnia(e.target.value)}
                    placeholder='   Selecione sua etnia'
                ></input>

                <strong>Qual o seu gênero?</strong>
                <input
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    placeholder='   Selecione sua gênero'
                ></input>

                <strong>Qual a sua orientação sexual?</strong>
                <input
                    value={sexual}
                    onChange={(e) => setSexual(e.target.value)}
                    placeholder='   Selecione sua orientação sexual'
                ></input>

                <strong>Você possui alguma deficiência?</strong>
                <p>A deficiência pode ser física, mental, auditiva, visual ou múltipla. A sigla utilizada é PCD</p>

                <input
                    value={deficiencia}
                    onChange={(e) => setDeficiencia(e.target.value)}
                    placeholder='   Você tem algum tipo de deficiência?'
                ></input>

                <strong>Como é o lugar onde você mora?</strong>
                <input
                    value={mora}
                    onChange={(e) => setMora(e.target.value)}
                    placeholder='   Como é o lugar onde você mora?'
                ></input>

                <strong>Você cursou o ensino médio em:</strong>
                <input
                    value={medio}
                    onChange={(e) => setMedio(e.target.value)}
                    placeholder='   Selecione o tipo de Instituição de Ensino.'
                ></input>

                <strong>Qual das seguintes alternativas melhor expressa a situação atual da sua renda familiar?</strong>
                <input
                    value={renda}
                    onChange={(e) => setRenda(e.target.value)}
                    placeholder='   Selecione uma opção'
                ></input>

                <strong>Você possui bolsa de estudos?</strong>
                <input
                    value={bolsa}
                    onChange={(e) => setBolsa(e.target.value)}
                    placeholder='   Selecione uma opção'
                ></input>
                <button>Salvar informações</button>
            </div>

            <div className='btn'>
                <button onClick={() => goToExperience(navigate)} className='voltar'>Voltar</button>
                <button onClick={() => goToRocket(navigate)} className='proximo'>Tudo certo!</button>
            </div>
        </Container>
    )
}

export default About