import React from 'react'
import * as S from './FirstSecondStyle'
import person from '../../assets/FirstSection/person.svg'

function FirstSecond() {
  return (
    <S.Container>
      <S.TextContainer>
        <p>Olá, eu sou o Marcos Pablo</p>
        <span>Desenvolvedor Front-End</span>
        <S.ContainerBtns>
          <S.FirstButton>
            <a
              href="https://drive.google.com/file/d/1-b56CG2BxkxI7FWZGmS57IyyNIHWP2Ne/view?usp=share_link"
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

      <S.Person width={300} height={255} src={person} />
    </S.Container>
  )
}

export default FirstSecond
