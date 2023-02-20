import React from 'react'
import * as S from './ContactStyle'
type CardsProps = {
  icon: string
  ftext: string
  stext?: string
  link?: string
}

function Cards({ icon, ftext, stext, link }: CardsProps) {
  return (
    <S.Card>
      <S.CardIcon>
        <S.Icon src={icon} alt="icone" />
      </S.CardIcon>
      <S.FirstText>{ftext}</S.FirstText>
      <S.SecondText>{stext}</S.SecondText>
      <S.link href="https://www.linkedin.com/in/marcos-pablo-cm/">
        {link}
      </S.link>
    </S.Card>
  )
}

export default Cards
