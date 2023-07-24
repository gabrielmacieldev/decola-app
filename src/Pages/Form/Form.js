import React, { useState } from 'react'
import logo from '../../assets/Decola Juninho PNG.png'
import { Container, Image } from './FormStyle'
import background from '../../assets/DECOLA APLICATIVO 1 PNG.png'
import { FaSignOutAlt } from 'react-icons/fa'
import foguete from '../../assets/foguete.png'

export const Form = () => {
  return (
    <>
            <Image>
                <img className='background' src={background}></img>
            </Image>

            <Container>

            <div>
              <ul>
                <li>
                  <a> <FaSignOutAlt class="icons" /></a>
                </li>
              </ul>
            </div>
            
                <div className='form'>

                    <img className='logo' src={logo}></img>

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
