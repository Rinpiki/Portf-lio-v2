import React from 'react'
import * as S from './MySkillsStyle'
type CardsProp = {
  img: string
}
function SkillCard({ img }: CardsProp) {
  return (
    <S.CardSkill>
      <img src={img} />
    </S.CardSkill>
  )
}

export default SkillCard
