import React, { useState } from 'react'
import { Container, Image } from './ContactDetailsStyle'
import logo from '../../assets/Decola Juninho PNG.png'
import background from '../../assets/BG FILTRO SOMENTE BAXO.png'

const ContactDetails = () => {

    const [aboutYou, setAboutYou] = useState("")
    const [name, setName] = useState("")

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
            </div>

        </Container>
        </>
    )
}

export default ContactDetails