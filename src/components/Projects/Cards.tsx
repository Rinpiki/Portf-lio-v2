import React from 'react'
import * as S from './ProjectsStyle'
type CardsProps = {
  title: string
  img: string
  tech: string
  link: string
}

function Cards({ title, img, tech, link }: CardsProps) {
  return (
    <S.Card>
      <S.CardImg src={img} />
      <S.CardTitle>
        <a href={link}>{title}</a>
      </S.CardTitle>
      <S.Tech>{tech}</S.Tech>
    </S.Card>
  )
}

export default Cards
