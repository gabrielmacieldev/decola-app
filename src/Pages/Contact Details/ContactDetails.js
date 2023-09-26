import React, { useState } from 'react'
import { Container, Image } from './ContactDetailsStyle'
import logo from '../../assets/Perfil.png'
import background from '../../assets/BG FILTRO SOMENTE BAIXO.png'
import { FaRegFileAlt } from "react-icons/fa";
import { goToForm, goToTraining } from '../../router/coordinates';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {

    const [aboutYou, setAboutYou] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstagram] = useState("")
    const [portfolio, setPortfolio] = useState("")
    const [github, setGithub] = useState("")
    const [mod, setMod] = useState("")
    const [anexo, setAnexo] = useState("")

    const navigate = useNavigate()

    return (
        <Container>

            <div className='card'>
                <h1>Foto de perfil</h1>
                <img src={logo} width='250'></img>
                <p>Ter uma foto de perfil ajuda no crescimento da sua carreira.</p>
                <button>Alterar foto de perfil</button>
            </div>

            <div className='sobre'>
                <h1>Sobre você</h1>
                <textarea
                    value={aboutYou}
                    onChange={(e) => setAboutYou(e.target.value)}
                ></textarea>
            </div>

            <div className='contato'>
                <h1>Dados de contato</h1>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='   Name'
                ></input>

                <input
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder='   Sobrenome'
                ></input>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='   E-mail'
                ></input>

                <input
                    value={cell}
                    onChange={(e) => setCell(e.target.value)}
                    placeholder='   Celular'
                ></input>

                <input
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder='   Estado'
                ></input>

                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='   Cidade'
                ></input>
            </div>

            <div className='social'>
                <h1>Perfis sociais</h1>
                <input
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder='   Linkedin'
                ></input>

                <input
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder='   Instagram'
                ></input>

                <input
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    placeholder='   Portfólio'
                ></input>

                <input
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder='   Github'
                ></input>
            </div>

            <div className='dispo'>
                <h1>Disponibilidade</h1>
                <p>Tem disponibilidade de mudança (cidade ou estado)?</p>
                <input
                    type="radio" name="dispoyes" id="onyes"
                ></input>
                <label for="yes">Sim</label>

                <input
                    type="radio" name="disponot" id="twonot"
                ></input>
                <label for="not">Não</label>

                <p>Está atualmente matriculado em alguma instituição de Ensino Superior?</p>
                <input
                    type="radio" name="dispo-yes" id="on-yes"
                ></input>
                <label for="yes">Sim</label>

                <input
                    type="radio" name="dispo-not" id="two-not"
                ></input>
                <label for="not">Não</label>
            </div>

            <div className='mod'>
                <h1>Modalidade de estágio que busca?</h1>
                <input
                    value={mod}
                    onChange={(e) => setMod(e.target.value)}
                    placeholder='Presencial / Home Office / Flex Office ( Híbrido)'
                ></input>
            </div>

            <div className='anexo'>
                <h1>Anexo do currículo</h1>
                <p>Envie um currículo para ter maiores chances nas avaliações!</p>
                <button> <FaRegFileAlt class="icons" /> Enviar um arquivo</button>
            </div>

            <div className='btn'>
                <button onClick={() => goToForm(navigate)} className='voltar'>Voltar</button>
                <button onClick={() => goToTraining(navigate)} className='proximo'>Próximo</button>
            </div>

        </Container>
    )
}

export default ContactDetails