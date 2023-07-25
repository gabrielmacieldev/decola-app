import React, { useState } from 'react'
import { Container } from './ContactDetailsStyle'
import logo from '../../assets/Decola Juninho PNG.png'

const ContactDetails = () => {

    const [aboutYou, setAboutYou] = useState("")

    return (

        <Container>

            <div className='card'>
                <h1>Foto de Perfil</h1>
                <img src={logo} width='150'></img>
                <p>Ter uma foto de perfil ajuda no crescimento da sua carreira</p>
                <button>Alterar foto de perfil</button>
            </div>

            <div className='sobre'>
                <h1>Sobre você</h1>
                <input
                    value={aboutYou}
                    onChange={(e) => setAboutYou(e.target.value)}
                ></input>
            </div>

        </Container>

    )
}

export default ContactDetails