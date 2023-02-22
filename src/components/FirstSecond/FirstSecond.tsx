import React from 'react'
import { Slide } from 'react-awesome-reveal'

import * as S from './FirstSecondStyle'

import person from '../../assets/FirstSection/person.svg'

function FirstSecond() {
  return (
    <S.Container>
      <Slide>
        <S.TextContainer>
          <p>Olá, eu sou o Marcos Pablo</p>
          <span>Desenvolvedor Front-End</span>
          <S.ContainerBtns>
            <S.FirstButton>
              <a
                href="https://drive.google.com/file/d/1HhTY0-zX9zNOfpY4Eibdn50luG25LfDR/view"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </S.FirstButton>
            <S.SecondButton>
              <a
                href="https://www.linkedin.com/in/marcos-pablo-cm/"
                target="_blank"
                rel="noreferrer"
              >
                Entrar em contato
              </a>
            </S.SecondButton>
          </S.ContainerBtns>
        </S.TextContainer>
      </Slide>
      <Slide direction="right">
        <S.Person src={person} />
      </Slide>
    </S.Container>
  )
}

export default FirstSecond
