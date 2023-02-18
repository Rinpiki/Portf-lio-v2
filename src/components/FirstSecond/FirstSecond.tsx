import React from 'react'
import Jump from 'react-reveal/Jump'

import {
  Container,
  ContainerBtns,
  ContainerText,
  FirstButton,
  Person,
  SecondButton,
} from './FirstSecondStyle'

import person from '../../assets/FirstSection/person.svg'

function FirstSecond() {
  return (
    <Container>
      <Jump>
        <ContainerText>
          <p>Olá, eu sou o Marcos Pablo</p>
          <span>Desenvolvedor Front-End & UI Designer</span>
          <ContainerBtns>
            <FirstButton>
              <a
                href="https://drive.google.com/file/d/1HhTY0-zX9zNOfpY4Eibdn50luG25LfDR/view"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </FirstButton>
            <SecondButton>
              <a
                href="https://www.linkedin.com/in/marcos-pablo-cm/"
                target="_blank"
                rel="noreferrer"
              >
                Entrar em contato
              </a>
            </SecondButton>
          </ContainerBtns>
        </ContainerText>
      </Jump>
      <Jump>
        <Person src={person} />
      </Jump>
    </Container>
  )
}

export default FirstSecond
