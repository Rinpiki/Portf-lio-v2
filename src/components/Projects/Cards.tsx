import React from 'react'
import * as S from './ProjectsStyle'
type CardsProps = {
  title: string
  img: string
  tech: string
  link: string
}
import { Slide } from 'react-awesome-reveal'

function Cards({ title, img, tech, link }: CardsProps) {
  return (
    <Slide>
      <S.Card>
        <S.CardImg src={img} />
        <S.CardTitle>
          <a href={link}>{title}</a>
        </S.CardTitle>
        <S.Tech>{tech}</S.Tech>
      </S.Card>
    </Slide>
  )
}

export default Cards
