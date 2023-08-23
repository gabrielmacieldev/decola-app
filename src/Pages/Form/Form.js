import React, { useState } from 'react'
import { Container, Image } from './FormStyle'
import background from '../../assets/BG  DECOLA COM O FOGUETE.png'
import { FaSignOutAlt } from 'react-icons/fa'
import foguete from '../../assets/foguete.png'

export const Form = () => {
  return (
    <>
      <Image>
        <img className='background' src={background}></img>
      </Image>

      <Container>

        <a> <FaSignOutAlt class="icons" /></a>
        <div className='form'>
          <button>Dados de Contatos</button>
          <button>Formação</button>
          <button>Experiência</button>
          <button>Sobre você</button>
          <img className='foguete' src={foguete}></img>
        </div>

      </Container>
    </>
  )
}

export default Form