import React, { useState } from 'react'
import { Container, Image } from './ContactDetailsStyle'
import logo from '../../assets/Decola Juninho PNG.png'
import background from '../../assets/BG FILTRO SOMENTE BAXO.png'

const ContactDetails = () => {

    const [aboutYou, setAboutYou] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [cell, setCell] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    return (

        <>
            

        <Container>

            <div className='card'>
                <h1>Foto de perfil</h1>
                <img src={logo} width='150'></img>
                <p>Ter uma foto de perfil ajuda no crescimento da sua carreira.</p>
                <button>Alterar foto de perfil</button>
            </div>

            <div className='sobre'>
                <h1>Sobre você</h1>
                <input
                    value={aboutYou}
                    onChange={(e) => setAboutYou(e.target.value)}
                ></input>
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

        </Container>
        </>
    )
}

export default ContactDetails