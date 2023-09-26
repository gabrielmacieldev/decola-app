import React, { useState } from 'react'
import { Container, Image } from './FormStyle'
import background from '../../assets/BG  DECOLA COM O FOGUETE.png'
import { FaSignOutAlt } from 'react-icons/fa'
import foguete from '../../assets/foguete.png'
import { useNavigate } from 'react-router-dom'
import { goToAbout, goToContactDetails, goToExperience, goToLogin, goToTraining } from '../../router/coordinates'

export const Form = () => {

  const navigate = useNavigate()

  return (
    <>
      <Image>
        <img className='background' src={background}></img>
      </Image>

      <Container>

        <a onClick={() => goToLogin(navigate)}> <FaSignOutAlt class="icons" /></a>
        <div className='form'>
          <button onClick={() => goToContactDetails(navigate)}>Dados de Contatos</button>
          <button onClick={() => goToTraining(navigate)}>Formação</button>
          <button onClick={() => goToExperience(navigate)}>Experiência</button>
          <button onClick={() => goToAbout(navigate)}>Sobre você</button>
          <img className='foguete' src={foguete}></img>
        </div>

      </Container>
    </>
  )
}

export default Form