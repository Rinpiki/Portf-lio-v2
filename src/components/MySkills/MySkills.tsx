import React from 'react'
import * as S from './MySkillsStyle'
import html from '../../assets/skill/html.svg'
import css from '../../assets/skill/css.svg'
import js from '../../assets/skill/js.svg'
import react from '../../assets/skill/react.svg'
import tail from '../../assets/skill/tail.svg'
import ty from '../../assets/skill/typescript.svg'
import next from '../../assets/skill/nextjs.svg'
import SkillCard from './SkillCard'
function MySkills() {
  return (
    <S.MySkills id="skills">
      <S.Title>Minhas skills</S.Title>
      <S.ContainerSkills>
        <SkillCard img={html} />
        <SkillCard img={css} />
        <SkillCard img={js} />
        <SkillCard img={react} />
        <SkillCard img={tail} />
        <SkillCard img={ty} />
        <SkillCard img={next} />
      </S.ContainerSkills>
    </S.MySkills>
  )
}

export default MySkills
