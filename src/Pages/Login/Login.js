import React, { useState } from 'react'
import logo from '../../assests/Decola Juninho PNG.png'
import { Container } from './LoginStyle'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Container>
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

            <button onClick={() => Login ()}>Entrar</button>

            
        </Container>
    )
}

export default Login 
