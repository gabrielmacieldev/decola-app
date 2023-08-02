import React, { useState } from 'react'
import { Container, Image } from './LoginStyle'
import { FaSignOutAlt } from 'react-icons/fa'
import background from '../../assets/BG  DECOLA COM O FOGUETE.png'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Image>
                <img className='background' src={background}></img>
            </Image>
            <Container>

                <div className='form'>

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='   E-mail'
                    ></input>

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='   Senha'
                    ></input>

                    <button onClick={() => Login()}> <FaSignOutAlt class="icons" /> Entrar</button>
                </div>
                <div className='signup'>
                    <span>Não tem uma conta?</span>

                    <span>CADASTRAR</span>
                </div>

            </Container>

        </>
    )
}

export default Login