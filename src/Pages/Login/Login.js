import React, { useState } from 'react'
import logo from '../../assets/Decola Juninho PNG.png'
import { Container, Image } from './LoginStyle'
import background from '../../assets/DECOLA APLICATIVO 1 PNG.png'

// import AcUnitIcon from '@mui/icons-material/AcUnit';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Image className='background' src={background}></Image>

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

                    <button onClick={() => Login()}>Entrar</button>

                    <div className='signup'>
                        <span>Não tem uma conta?</span>

                        <span>CADASTRAR</span>
                    </div>

                </Container>

        </>

    )
}

export default Login 
