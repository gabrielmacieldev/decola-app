import React, { useState } from 'react'
import { Container, Image } from './SignupStyle'
import background from '../../assets/BG  DECOLA COM O FOGUETE.png'
import { goToLogin } from '../../router/coordinates'
import { useNavigate } from 'react-router-dom'


export const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate()

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

          <input
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder='   Confirmar Senha'
          ></input>

          <button onClick={() => Signup()}>Criar Conta</button>
        </div>
        <div className='signup'>
          <span>Já tem uma conta?</span>

          <span onClick={() => goToLogin(navigate)}>LOGIN</span>
        </div>

      </Container>

    </>
  )
}

export default Signup