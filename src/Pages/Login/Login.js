import React, { useState } from 'react'
import logo from '../../assets/Decola Juninho PNG.png'
import { Container, Image } from './LoginStyle'
import background from '../../assets/DECOLA APLICATIVO 1 PNG.png'
import { FaSignOutAlt } from 'react-icons/fa'

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

                    <img className='logo' src={logo}></img>
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
